import { FC } from 'react'
import { SocialMediaIcon } from './SocialMediaIcon'

export type TSocialLink = { href: string; label: 'github' | 'linkedin' | '' }

interface Props {
  links: TSocialLink[]
}

export const SocialMediaRow: FC<Props> = ({ links }) => {
  return (
    <div className={`flex text-white items-center justify-center gap-2`}>
      {links.map((link) => (
        <SocialMediaIcon key={link.href} {...link} />
      ))}
    </div>
  )
}
