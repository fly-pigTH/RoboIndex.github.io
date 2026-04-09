import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

const GUIDES_DIR = path.join(process.cwd(), 'src/content/guides')

export interface GuideItem {
  text: string
  text_en?: string
  source: 'official' | 'guide' | 'community'
  url?: string
  important?: boolean
  heading?: string
}

export interface GuideSection {
  heading: string
  heading_en?: string
  items: GuideItem[]
}

export interface Guide {
  slug: string
  title: string
  title_en?: string
  category: string
  venue: string
  sections: GuideSection[]
}

// Full blog-style guide
export interface GuideParagraph {
  source: 'official' | 'guide' | 'community'
  text: string
  important?: boolean
  heading?: string
}

export interface GuideLink {
  label: string
  url: string
  note?: string
}

export interface GuideChapter {
  id: string
  title: string
  number: string
  content?: string
  paragraphs?: GuideParagraph[]
  paragraphs_after?: GuideParagraph[]
  items?: GuideParagraph[]
  tips?: GuideParagraph[]
  checklist?: GuideParagraph[]
  links?: GuideLink[]
  reference_links?: GuideLink[]
}

export interface FullGuide {
  title: string
  author: string
  author_url: string
  updated: string
  description: string
  chapters: GuideChapter[]
}

function parseGuide(file: string): Guide {
  const slug = path.basename(file, '.yaml')
  const content = fs.readFileSync(path.join(GUIDES_DIR, file), 'utf-8')
  const data = yaml.parse(content)
  return { slug, ...data }
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(GUIDES_DIR)) return []
  const files = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith('.yaml') && !f.startsWith('ral-guide'))
  return files.map(parseGuide)
}

export function getFullGuide(): FullGuide | null {
  const filePath = path.join(GUIDES_DIR, 'ral-guide.yaml')
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')
  return yaml.parse(content)
}

export function getGuidesByCategory(category: string): Guide[] {
  return getAllGuides().filter(g => g.category === category)
}
