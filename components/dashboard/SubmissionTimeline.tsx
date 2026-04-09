'use client'

interface Stage {
  name: string
  name_en?: string
  duration_min: number
  duration_max: number
  source: 'official' | 'guide' | 'community'
  note?: string
}

const sourceIcon: Record<string, string> = {
  official: '📋',
  guide: '📘',
  community: '💬',
}

const sourceColor: Record<string, string> = {
  official: 'bg-blue-500',
  guide: 'bg-violet-500',
  community: 'bg-amber-500',
}

export default function SubmissionTimeline({ stages }: { stages: Stage[] }) {
  const maxDays = stages.reduce((sum, s) => sum + s.duration_max, 0)

  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-1">RA-L Submission Timeline</h2>
      <p className="text-sm text-text-muted mb-6">
        Typical review cycle — total ~{Math.round(maxDays / 30)} months
        <span className="ml-2 text-xs">
          {sourceIcon.official} Official {sourceIcon.guide} Guide {sourceIcon.community} Community
        </span>
      </p>

      <div className="space-y-3">
        {stages.map((stage, i) => {
          const widthPct = Math.max((stage.duration_max / maxDays) * 100, 8)
          const label = stage.duration_min === stage.duration_max
            ? `${stage.duration_min}d`
            : `${stage.duration_min}–${stage.duration_max}d`

          return (
            <div key={i} className="flex items-center gap-3">
              <div className="w-32 shrink-0 text-right">
                <span className="text-sm text-text-secondary">{stage.name}</span>
              </div>
              <div className="flex-1 relative">
                <div
                  className={`h-8 rounded-lg ${sourceColor[stage.source]} opacity-80 flex items-center px-3 transition-all`}
                  style={{ width: `${widthPct}%`, minWidth: '60px' }}
                >
                  <span className="text-xs font-medium text-white whitespace-nowrap">
                    {label} {sourceIcon[stage.source]}
                  </span>
                </div>
                {stage.note && (
                  <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-[10px] text-red-500 font-medium whitespace-nowrap">
                    {stage.note}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-border-light flex items-center justify-between text-xs text-text-muted">
        <span>Data from <a href="https://github.com/fly-pigTH/ral-skill" className="text-accent-500 hover:underline" target="_blank" rel="noopener noreferrer">ral.skill</a></span>
        <span>Official guarantee: ≤ 6 months</span>
      </div>
    </div>
  )
}
