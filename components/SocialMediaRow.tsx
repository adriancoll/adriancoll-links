import { FC } from 'react'
import { SocialMediaIcon } from './SocialMediaIcon'

export type TSocialLink = { href: string }

interface Props {
  links: TSocialLink[]
}

export const SocialMediaRow: FC<Props> = ({ links }) => {
  return (
    <div className={`flex items-center justify-center gap-2`}>
      {links.map(({ href }) => (
        <SocialMediaIcon key={href} href={href} />
      ))}
    </div>
  )
}
