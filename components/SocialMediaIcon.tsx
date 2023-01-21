import Link from 'next/link'
import { FC, HTMLAttributeAnchorTarget } from 'react'

import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'
import { TSocials } from '../interfaces/social'
import { BsLink45Deg } from 'react-icons/bs'

interface Props {
  href: string
  target?: HTMLAttributeAnchorTarget
  label: TSocials
  size?: number
}

export const SocialMediaIcon: FC<Props> = ({
  href,
  target = '_blank',
  label,
  size = 24,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className='text-3xl text-slate-300 transition hover:rotate-3 hover:scale-125 hover:text-tertiary focus:rotate-3 focus:scale-125 focus:text-tertiary focus:outline-none'>
      {!label && <BsLink45Deg size={size} />}
      {label === 'github' && <AiFillGithub size={size} />}
      {label === 'linkedin' && <FaLinkedinIn size={size} />}
      {label === 'instagram' && <AiFillInstagram size={size} />}
      {label === 'twitter' && <AiOutlineTwitter size={size} />}
      {label === 'fiverr' && <SiFiverr size={size} />}
    </Link>
  )
}
