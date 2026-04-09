import { getFullGuide } from '@/src/lib/guides'
import type { GuideChapter, GuideParagraph, GuideLink } from '@/src/lib/guides'
import SourceBadge from '@/components/SourceBadge'
import GuideTOC from '@/components/GuideTOC'

export const metadata = {
  title: 'RA-L 投稿攻略 — RoboIndex',
  description: 'Ce Hao 的 RA-L 投稿全流程攻略，从期刊定位到会议 Transfer',
}

function SourceDot({ source }: { source: string }) {
  const colors: Record<string, string> = {
    official: 'bg-blue-500',
    guide: 'bg-violet-500',
    community: 'bg-amber-500',
  }
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors[source] || 'bg-gray-400'} mr-2 mt-[7px] shrink-0`} />
}

function Paragraph({ p }: { p: GuideParagraph }) {
  return (
    <div className={`flex items-start gap-0 mb-4 ${p.important ? 'bg-red-50 border border-red-200 rounded-xl p-4 -mx-4' : ''}`}>
      <SourceDot source={p.source} />
      <div className="flex-1 min-w-0">
        {p.heading && <h4 className="font-semibold text-text-primary mb-1">{p.heading}</h4>}
        {p.important && <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 mb-1 block">⚠️ 重要</span>}
        <div className="text-[15px] text-text-primary leading-[1.8] whitespace-pre-line">{p.text}</div>
      </div>
    </div>
  )
}

function LinkList({ links, label }: { links: GuideLink[]; label?: string }) {
  return (
    <div className="my-4 bg-surface-2 rounded-xl p-4">
      {label && <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">{label}</div>}
      <div className="space-y-2">
        {links.map((link, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="text-text-muted font-mono text-xs w-6 text-right shrink-0">{i + 1}.</span>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline break-all">
              {link.label}
            </a>
            {link.note && <span className="text-text-muted text-xs">— {link.note}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function BulletList({ items, label }: { items: GuideParagraph[]; label?: string }) {
  return (
    <div className="my-4">
      {label && <div className="text-sm font-semibold text-text-secondary mb-3">{label}</div>}
      <div className="space-y-2 ml-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-accent-500 mt-1 shrink-0 text-xs">▸</span>
            <div className="flex-1">
              <span className="text-[15px] text-text-primary leading-[1.7]">{item.text}</span>
              <span className="ml-1.5 align-middle"><SourceBadge source={item.source} /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChapterBlock({ chapter }: { chapter: GuideChapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-24 mb-16 last:mb-0">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-3xl font-bold text-border font-mono">{chapter.number}</span>
        <h2 className="text-xl font-bold text-text-primary tracking-tight">{chapter.title}</h2>
      </div>

      {chapter.content && (
        <p className="text-[15px] text-text-secondary leading-[1.8] mb-4">{chapter.content}</p>
      )}

      {chapter.paragraphs?.map((p, i) => <Paragraph key={i} p={p} />)}

      {chapter.links && <LinkList links={chapter.links} />}
      {chapter.reference_links && <LinkList links={chapter.reference_links} label="参考链接" />}

      {chapter.items && <BulletList items={chapter.items} />}
      {chapter.tips && <BulletList items={chapter.tips} label="💡 Tips" />}
      {chapter.checklist && <BulletList items={chapter.checklist} label="✅ Checklist" />}

      {chapter.paragraphs_after?.map((p, i) => <Paragraph key={`after-${i}`} p={p} />)}
    </section>
  )
}

export default function GuidesPage() {
  const guide = getFullGuide()
  if (!guide) return <div>Guide not found</div>

  const tocNodes = guide.chapters.map(ch => ({
    id: ch.id,
    label: `${ch.number}. ${ch.title}`,
    icon: '',
    children: [],
  }))

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="mb-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-500 mb-3">
          Submission Guide
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary leading-tight">
          {guide.title}
        </h1>
        <p className="mt-3 text-[15px] text-text-secondary leading-relaxed max-w-2xl">
          {guide.description}
        </p>

        <div className="mt-5 flex items-center gap-4 text-sm text-text-muted">
          <span>
            作者：<a href={guide.author_url} className="text-accent-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">{guide.author}</a>
          </span>
          <span className="text-border">|</span>
          <span>更新：{guide.updated}</span>
        </div>

        {/* Source legend */}
        <div className="mt-5 flex items-center gap-6 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" /> 📋 IEEE 官方
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-500" /> 📘 作者经验
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> 💬 社区讨论
          </span>
        </div>
      </div>

      {/* Layout: sidebar + content */}
      <div className="flex gap-12">
        <GuideTOC nodes={tocNodes} />

        <div className="flex-1 min-w-0">
          {guide.chapters.map(ch => (
            <ChapterBlock key={ch.id} chapter={ch} />
          ))}

          {/* Footer */}
          <div className="mt-16 p-6 rounded-2xl bg-surface-2 border border-border-light text-center">
            <p className="text-sm text-text-secondary mb-3">
              想要 AI 实时辅助？安装 ral.skill 在 Claude Code 中获取交互式投稿指导。
            </p>
            <a
              href="https://github.com/fly-pigTH/ral-skill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-text-primary text-surface-0 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              GitHub: ral.skill →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
