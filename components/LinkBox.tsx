import NextLink from 'next/link'
import { FC } from 'react'
import { Link } from '../interfaces/social'
import { SiFiverr } from 'react-icons/si'
import { SocialMediaIcon } from './SocialMediaIcon'
import { MdBuild } from 'react-icons/md'
interface Props {
  link: Link
}

export const LinkBox: FC<Props> = ({
  link: { icon, href, label, disabled = false },
}) => {
  if (disabled) {
    return (
      <div className='relative rounded-md border-2 flex items-center border-transparent opacity-75 bg-slate-300 px-4 py-2 text-center font-bold shadow-none focus:outline-none shadow-tertiary transition duration-200 focus:bg-slate-300 focus:-translate-y-1 cursor-not-allowed  hover:shadow-xl'>
        <div className='w-8 h-8 grid place-content-center absolute left-1 p-1 rounded-md bg-slate-800 text-white'>
          <MdBuild size={15} />
        </div>
        <span className='w-full text-gray-600'>{label} -  Under construction</span>
      </div>
    )
  }

  return (
    <NextLink
      href={href}
      className='relative rounded-md border-2 flex items-center border-transparent bg-slate-100 hover:bg-slate-300 px-4 py-2 text-center font-bold shadow-none focus:outline-none shadow-tertiary transition duration-200 focus:bg-slate-300 focus:-translate-y-1 hover:-translate-y-1  hover:shadow-xl'>
      <div className='w-8 h-8 grid place-content-center absolute left-1 p-1 rounded-md bg-slate-800 text-white'>
        <SocialMediaIcon label={icon} href={href} size={26} />
      </div>
      <span className='w-full'>{label}</span>
    </NextLink>
  )
}
