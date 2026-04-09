import fs from 'fs'
import path from 'path'
import yaml from 'yaml'

const GUIDES_DIR = path.join(process.cwd(), 'src/content/guides')

export interface GuideItem {
  text: string
  text_en?: string
  source: 'official' | 'guide' | 'community'
  url?: string
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

function parseGuide(file: string): Guide {
  const slug = path.basename(file, '.yaml')
  const content = fs.readFileSync(path.join(GUIDES_DIR, file), 'utf-8')
  const data = yaml.parse(content)
  return { slug, ...data }
}

export function getAllGuides(): Guide[] {
  if (!fs.existsSync(GUIDES_DIR)) return []
  const files = fs.readdirSync(GUIDES_DIR).filter(f => f.endsWith('.yaml'))
  return files.map(parseGuide)
}

export function getGuidesByCategory(category: string): Guide[] {
  return getAllGuides().filter(g => g.category === category)
}
