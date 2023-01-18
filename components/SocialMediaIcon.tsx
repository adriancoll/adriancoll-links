import Link from 'next/link'
import { FC, HTMLAttributeAnchorTarget } from 'react'
import Image from 'next/image'

import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
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
      className='text-3xl text-slate-300 transition hover:rotate-3 hover:scale-125 hover:text-tertiary focus:rotate-3 focus:scale-125 focus:text-tertiary focus:outline-none'>
      {label === 'github' && <AiFillGithub />}
      {label === 'linkedin' && <FaLinkedinIn />}
      {label === 'instagram' && <AiFillInstagram />}
      {label === 'twitter' && <AiOutlineTwitter />}
    </Link>
  )
}
