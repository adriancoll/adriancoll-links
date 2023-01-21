export type TSocials = 'github' | 'fiverr' | 'twitter' | 'linkedin' | 'instagram'

export interface ISocialSection {
  title: string
  links: Link[]
}

export interface Link {
  label: string
  href: string
  icon: TSocials
}
