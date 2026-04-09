# Design Spec: World Map Background + Visitor Stats

**Date:** 2026-04-09  
**Project:** RoboIndex (Next.js 16, static export, GitHub Pages)  
**Scope:** Add animated SVG world map background to hero section + GoatCounter visitor stats with city nodes

---

## 1. Overview

Two visual features added to `app/page.tsx` (the RoboIndex homepage hero):

1. **World Map SVG Background** — subtle animated line-art world map behind the hero text
2. **Visitor Stats + City Nodes** — GoatCounter live visitor count + hardcoded city markers for major robotics research hubs

---

## 2. Architecture

### Component Structure

```
app/
  page.tsx              ← server component, imports WorldMapBackground
  layout.tsx            ← add GoatCounter tracker <script>
  globals.css           ← add mapPulse + nodePulse keyframes
components/
  WorldMapBackground.tsx ← 'use client', SVG map + city nodes + visitor fetch
```

### Data Flow

- `app/page.tsx` remains a **server component** — no changes to static data loading
- `WorldMapBackground` is a **client component** (`'use client'`) — handles:
  - Rendering the SVG map inline
  - `useEffect` to fetch visitor count from GoatCounter public API
  - Rendering city node overlays on the SVG

---

## 3. World Map SVG Background

### Visual Style

- Simplified continental outlines (Natural Earth simplified, ~3–4 KB path data)
- `fill="none"`, `stroke="currentColor"` — pure line/stroke style
- Stroke width: `0.3` (thin lines at SVG coordinate scale)
- Color: `text-text-muted` via Tailwind class on the `<svg>` element
- Opacity:
  - Light mode: `0.06` (base) ↔ `0.10` (peak) — breathing animation
  - Dark mode: `0.10` (base) ↔ `0.15` (peak) — slightly brighter

### Layout

- `absolute inset-0 w-full h-full` — covers entire hero `<main>` area
- `pointer-events-none` — non-interactive
- `overflow-hidden` on parent `<main>` — prevents map overflow
- `preserveAspectRatio="xMidYMid meet"` — map centered, no distortion
- `viewBox="0 0 1000 500"` — standard world map aspect ratio
- `z-0` — behind all hero text content (text content at `z-10` or default)

### Animation

New CSS keyframes added to `app/globals.css`:

```css
@keyframes mapPulse {
  0%, 100% { opacity: 0.06; }
  50%       { opacity: 0.10; }
}

.dark .world-map-svg {
  animation: mapPulseDark 8s ease-in-out infinite;
}
@keyframes mapPulseDark {
  0%, 100% { opacity: 0.10; }
  50%       { opacity: 0.15; }
}

.world-map-svg {
  animation: mapPulse 8s ease-in-out infinite;
}
```

---

## 4. City Nodes

### Cities (hardcoded)

8 nodes representing major robotics research centers, positioned as SVG `(cx, cy)` coordinates mapped to approximate geographic lat/lon projected onto the `0 0 1000 500` viewBox:

| City | Institution(s) | approx SVG coords |
|------|---------------|-------------------|
| Boston/Cambridge | MIT | (228, 172) |
| Pittsburgh | Carnegie Mellon | (220, 185) |
| Zürich | ETH Zürich | (490, 158) |
| Tokyo | AIST, U Tokyo | (820, 183) |
| London | Imperial, UCL | (460, 148) |
| Beijing | THU, PKU | (768, 172) |
| San Francisco | UC Berkeley, Stanford | (130, 193) |
| Singapore | NUS, NTU | (762, 282) |

Note: Boston and Pittsburgh are geographically close and will appear near-overlapping at full map scale — acceptable given the decorative purpose. If visually too crowded, drop Pittsburgh.

### Node Style

Each node consists of two SVG elements:
1. **Inner circle** — `r="3"`, `fill="currentColor"` (accent-500), opacity 0.6
2. **Pulse ring** — same `r="3"`, uses `transform: scale()` + opacity fade for the expanding ring effect

Node color: `text-accent-500` class on a wrapping `<g>` element.

### Node Animation

Use `transform: scale()` rather than animating SVG `r` directly — more reliable cross-browser (Safari < 15.4 doesn't animate `r` via CSS `@keyframes`):

```css
@keyframes nodePulse {
  0%   { transform: scale(1);   opacity: 0.8; }
  100% { transform: scale(3.5); opacity: 0;   }
}
.node-pulse {
  transform-origin: center;
  transform-box: fill-box;
  animation: nodePulse 2.5s ease-out infinite;
}
```

Each node gets a staggered `animation-delay` (0s, 0.3s, 0.6s … 2.1s) so they don't all pulse simultaneously.

### Hover Tooltip

City name shown on `<title>` element inside each `<g>` (native SVG tooltip). No JS required. `pointer-events-auto` only on node groups (parent SVG has `pointer-events-none`, overridden per node).

---

## 5. Visitor Stats

### GoatCounter Setup

1. User creates free account at goatcounter.com, picks a site ID (e.g., `roboindex`)
2. Add tracker script to `app/layout.tsx` `<head>`:
   ```tsx
   <Script
     data-goatcounter="https://roboindex.goatcounter.com/count"
     async
     src="//gc.zgo.at/count.js"
     strategy="afterInteractive"
   />
   ```
   (Uses Next.js `<Script>` component, `strategy="afterInteractive"`)

### API Fetch

In `WorldMapBackground.tsx`, on mount:
```ts
useEffect(() => {
  fetch('https://roboindex.goatcounter.com/counter/TOTAL.json')
    .then(r => r.json())
    .then(data => setVisitorCount(data.count))
    .catch(() => {}) // silent failure
}, [])
```

`data.count` returns a pre-formatted string like `"1,234"`.

**The GoatCounter site ID (`roboindex`) is a placeholder** — user must substitute their actual site ID before deployment.

### Display Location

Appended to the existing stats row in `app/page.tsx`:

```
626 papers  |  310 open-source repos  |  1 skill for all
```

Becomes a new line (or extends the row on desktop):

```
🌍  1,234 visitors  ·  researchers worldwide
```

- Shows only when fetch succeeds and count > 0
- Loading state: nothing shown (no skeleton, no spinner)
- Failure state: row hidden entirely
- Font: same `text-sm text-text-muted` as existing stats

---

## 6. Changes to Existing Files

| File | Change |
|------|--------|
| `app/page.tsx` | Add `<WorldMapBackground />` inside `<main>`, make `<main>` `relative overflow-hidden` |
| `app/layout.tsx` | Add GoatCounter `<Script>` in `<head>` |
| `app/globals.css` | Add `mapPulse`, `mapPulseDark`, `nodePulse` keyframes |
| `components/WorldMapBackground.tsx` | New file (client component) |

---

## 7. Constraints & Non-Goals

- **No server runtime** — all data fetched client-side via `useEffect`
- **Static export compatible** — no `getServerSideProps`, no API routes
- **GoatCounter site ID** — user must create account and replace placeholder before pushing
- **Country count** — GoatCounter free tier does not expose country breakdown via public API; "researchers worldwide" used as static text instead of a live country count
- **Mobile** — SVG scales naturally; city nodes hidden below `sm` breakpoint via CSS media query in `globals.css` (`@media (max-width: 639px) { .city-nodes { display: none; } }`), since Tailwind's `hidden/block` classes don't translate correctly to SVG `<g>` display values
- **No external SVG file** — map paths inlined in component

---

## 8. Out of Scope

- Actual geographic visitor heatmap (requires paid analytics or PostHog)
- Per-country breakdown in the UI
- Server-side rendering of visitor count
