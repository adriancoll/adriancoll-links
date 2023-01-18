import NextLink from 'next/link'
import { FC } from 'react'
import { Link } from './SocialSection'

interface Props {
  link: Link
}

export const LinkBox: FC<Props> = ({ link: { highlighted, href, label } }) => {
  return (
    <NextLink
      href={href}
      className='rounded-md border-2 border-transparent bg-slate-100 hover:bg-slate-300 px-4 py-2 text-center font-bold shadow-none focus:outline-none shadow-tertiary transition duration-200 focus:bg-slate-300 focus:-translate-y-1 hover:-translate-y-1  hover:shadow-xl'>
      {label}
    </NextLink>
  )
}
