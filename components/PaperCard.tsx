import Link from 'next/link'
import type { Paper } from '@/src/lib/types'

export default function PaperCard({ paper }: { paper: Paper }) {
  const repoShort = paper.repo?.replace('https://github.com/', '') || ''
  const maxTags = 4

  return (
    <Link href={`/papers/${paper.slug}`} className="block group">
      <article className="bg-surface-1 rounded-2xl border border-border-light p-5 transition-all duration-200 hover:shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:-translate-y-0.5">
        {/* Top row: title + year */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-[15px] font-semibold text-text-primary group-hover:text-accent-600 transition-colors duration-200 leading-snug">
            {paper.title}
          </h3>
          <span className="shrink-0 text-xs font-mono text-text-muted bg-surface-2 px-2 py-0.5 rounded">
            {paper.year}
          </span>
        </div>

        {/* Abstract */}
        {paper.abstract && (
          <p className="text-[13px] text-text-secondary leading-relaxed line-clamp-2 mb-3">
            {paper.abstract}
          </p>
        )}

        {/* Bottom row: repo + tags + links */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            {/* Repo */}
            {repoShort && (
              <span className="text-[11px] text-text-muted font-mono truncate max-w-[200px]" title={repoShort}>
                {repoShort}
              </span>
            )}

            {/* Tags - show first few */}
            {paper.tags.length > 0 && (
              <div className="flex items-center gap-1 shrink-0">
                {paper.tags.slice(0, maxTags).map(tag => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-surface-2 text-text-muted">
                    {tag}
                  </span>
                ))}
                {paper.tags.length > maxTags && (
                  <span className="text-[10px] text-text-muted">
                    +{paper.tags.length - maxTags}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 shrink-0">
            {paper.arxiv && (
              <span className="text-[10px] text-text-muted font-medium px-1.5 py-0.5 rounded border border-border-light">
                arXiv
              </span>
            )}
            {paper.repo && (
              <span className="text-[10px] text-text-muted font-medium px-1.5 py-0.5 rounded border border-border-light">
                Code
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
