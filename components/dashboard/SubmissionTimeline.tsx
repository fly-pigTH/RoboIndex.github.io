'use client'

interface Stage {
  name: string
  name_en?: string
  duration_min: number
  duration_max: number
  source: 'official' | 'guide' | 'community'
  note?: string
}

const sourceColor: Record<string, string> = {
  official: 'bg-blue-500',
  guide: 'bg-violet-500',
  community: 'bg-amber-500',
}

const sourceLabel: Record<string, string> = {
  official: 'IEEE Official',
  guide: 'Guide',
  community: 'Community',
}

export default function SubmissionTimeline({ stages }: { stages: Stage[] }) {
  const totalMin = stages.reduce((s, st) => s + st.duration_min, 0)
  const totalMax = stages.reduce((s, st) => s + st.duration_max, 0)

  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-1">RA-L Submission Timeline</h2>
      <p className="text-sm text-text-muted mb-6">
        Total ~{Math.round(totalMin / 30)}–{Math.round(totalMax / 30)} months · Official guarantee ≤ 6 months
      </p>

      {/* Timeline table */}
      <div className="space-y-2">
        {stages.map((stage, i) => {
          const days = stage.duration_min === stage.duration_max
            ? `${stage.duration_min} days`
            : `${stage.duration_min}–${stage.duration_max} days`

          return (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-border-light/40 last:border-0">
              {/* Stage name */}
              <div className="w-36 shrink-0">
                <span className="text-sm text-text-primary font-medium">{stage.name}</span>
              </div>

              {/* Duration bar */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-6 rounded ${sourceColor[stage.source]} opacity-75 flex items-center px-2.5`}
                    style={{ width: `${Math.max((stage.duration_max / totalMax) * 100, 12)}%` }}
                  >
                    <span className="text-[11px] font-medium text-white whitespace-nowrap">{days}</span>
                  </div>

                  {/* Source + note inline */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-text-muted">{sourceLabel[stage.source]}</span>
                    {stage.note && (
                      <span className="text-[10px] font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                        {stage.note}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-border-light text-xs text-text-muted">
        Data from <a href="https://github.com/fly-pigTH/ral-skill" className="text-accent-500 hover:underline" target="_blank" rel="noopener noreferrer">ral.skill</a>
      </div>
    </div>
  )
}
