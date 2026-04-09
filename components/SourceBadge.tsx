const sourceConfig = {
  official: { icon: '📋', label: 'IEEE Official', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  guide: { icon: '📘', label: 'Guide', color: 'text-violet-600 bg-violet-50 border-violet-200' },
  community: { icon: '💬', label: 'Community', color: 'text-amber-600 bg-amber-50 border-amber-200' },
} as const

export default function SourceBadge({ source, url }: { source: 'official' | 'guide' | 'community'; url?: string }) {
  const config = sourceConfig[source]
  const badge = (
    <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full border ${config.color}`}>
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  )
  if (url) {
    return <a href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">{badge}</a>
  }
  return badge
}
