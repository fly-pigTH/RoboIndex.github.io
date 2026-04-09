import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

const GUIDES_DIR = path.join(process.cwd(), 'src/content/guides')

export interface GuideBlock {
  type: 'text' | 'list' | 'steps' | 'links' | 'quote' | 'heading' | 'callout' | 'compare'
  content?: string
  items?: (string | { label: string; url: string })[]
  ordered?: boolean
  variant?: 'tip' | 'warning'
  good?: string
  bad?: string
  note?: string
}

export interface GuideChapter {
  id: string
  title: string
  blocks: GuideBlock[]
}

export interface GuidePhase {
  id: string
  title: string
  subtitle: string
  chapters: GuideChapter[]
}

export interface FullGuide {
  title: string
  author: string
  author_url: string
  updated: string
  description: string
  phases: GuidePhase[]
}

export function getFullGuide(): FullGuide | null {
  const filePath = path.join(GUIDES_DIR, 'ral-guide.yaml')
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')
  return yaml.parse(content)
}
