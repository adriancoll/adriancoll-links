import Link from 'next/link'
import { Github, Fiverr, LinkedIn, Twitter } from './icons'
import { FC, HTMLAttributeAnchorTarget } from 'react'

interface Props {
  href: string
  target?: HTMLAttributeAnchorTarget
}

export const SocialMediaIcon: FC<Props> = ({ href, target = '_blank' }) => {
  return (
    <Link href={href} target={target}>
      <span className='text-white'>
        {href.toLowerCase().includes('github') && <Github />}
        {href.toLowerCase().includes('linkedin') && <LinkedIn />}
        {href.toLowerCase().includes('twitter') && <Twitter />}
        {href.toLowerCase().includes('fiverr') && <Fiverr />}
      </span>
    </Link>
  )
}
