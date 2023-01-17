import Link from 'next/link'
import { FC, HTMLAttributeAnchorTarget } from 'react'
import Image from 'next/image'

import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { SiFiverr } from 'react-icons/si'

interface Props {
  href: string
  target?: HTMLAttributeAnchorTarget
  label: string
}

export const SocialMediaIcon: FC<Props> = ({
  href,
  target = '_blank',
  label,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className='duration hover:color-primary hover: bg-gradient-to-tr from-tertiary to-primary bg-clip-text text-3xl text-slate-700 transition hover:scale-105 hover:text-transparent'>
      {label === 'github' && <AiFillGithub />}
      {label === 'fiverr' && <SiFiverr />}
      {label === 'linkedin' && <AiFillLinkedin />}
      {label === 'instagram' && <AiFillInstagram />}
      {label === 'twitter' && <AiFillTwitterSquare />}
    </Link>
  )
}
