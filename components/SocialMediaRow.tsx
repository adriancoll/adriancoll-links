import { FC } from 'react'
import { SocialMediaIcon } from './SocialMediaIcon'

export type TSocialLink = { href: string; label: 'github' | 'linkedin' }

interface Props {
  links: TSocialLink[]
}

export const SocialMediaRow: FC<Props> = ({ links }) => {
  return (
    <div className={`my-4 flex items-center justify-center gap-2 text-white`}>
      {links.map((link) => (
        <SocialMediaIcon key={link.href} {...link} />
      ))}
    </div>
  )
}
