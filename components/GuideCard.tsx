import type { Guide } from '@/src/lib/guides'
import SourceBadge from './SourceBadge'

const categoryConfig: Record<string, { icon: string; color: string }> = {
  writing: { icon: '✍️', color: 'text-emerald-600' },
  format: { icon: '📐', color: 'text-red-500' },
  rebuttal: { icon: '🛡️', color: 'text-violet-600' },
  timeline: { icon: '⏱️', color: 'text-blue-600' },
  fun: { icon: '🎲', color: 'text-amber-500' },
}

export default function GuideCard({ guide }: { guide: Guide }) {
  const cat = categoryConfig[guide.category] || { icon: '📄', color: 'text-gray-600' }

  return (
    <article className="bg-surface-1 rounded-2xl border border-border-light p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-lg ${cat.color}`}>{cat.icon}</span>
        <span className="text-xs font-medium tracking-wide uppercase text-accent-500">{guide.venue}</span>
      </div>
      <h3 className="font-semibold text-text-primary leading-snug mb-4">{guide.title}</h3>

      {guide.sections.map((section, si) => (
        <div key={si} className="mb-4 last:mb-0">
          <h4 className="text-sm font-medium text-text-secondary mb-2">{section.heading}</h4>
          <ul className="space-y-2">
            {section.items.map((item, ii) => (
              <li key={ii} className="flex items-start gap-2 text-sm text-text-primary leading-relaxed">
                <span className="text-text-muted mt-0.5 shrink-0">•</span>
                <span className="flex-1">
                  {item.text}
                  <span className="ml-1.5 inline-flex align-middle">
                    <SourceBadge source={item.source} url={item.url} />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  )
}
