import { getAllGuides } from '@/src/lib/guides'
import GuideCard from '@/components/GuideCard'

export const metadata = {
  title: 'Submission Guides — RoboIndex',
  description: 'Distilled submission experience for RA-L and other robotics venues',
}

const categories = [
  { key: 'all', label: 'All' },
  { key: 'writing', label: '✍️ Writing' },
  { key: 'format', label: '📐 Format' },
  { key: 'rebuttal', label: '🛡️ Rebuttal' },
  { key: 'timeline', label: '⏱️ Timeline' },
]

export default function GuidesPage() {
  const guides = getAllGuides()

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">Submission Guides</h1>
        <p className="mt-2 text-text-secondary">
          Distilled from real submission experiences — every tip tagged with its source.
        </p>
        <div className="mt-2 flex items-center gap-3 text-xs text-text-muted">
          <span>📋 IEEE Official</span>
          <span>📘 Expert Guide</span>
          <span>💬 Community</span>
          <span className="text-text-muted">·</span>
          <a
            href="https://github.com/fly-pigTH/ral-skill"
            className="text-accent-500 hover:text-accent-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by ral.skill
          </a>
        </div>
      </div>

      <div className="grid gap-6">
        {guides.map(guide => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </main>
  )
}
