import { FC } from 'react'

export type SocialLink = { href: string }

interface Props {
  links: SocialLink[]
}

export const SocialMediaRow: FC<Props> = ({ links }) => {
  return (
    <div className={`flex items-center justify-center gap-2`}>
      {links.map(({ href }) => (
        <div key={href}>{href}</div>
      ))}
    </div>
  )
}
