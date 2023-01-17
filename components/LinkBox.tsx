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
      className='rounded-md border-2 border-transparent bg-white px-4 py-2 text-center font-semibold shadow-none shadow-tertiary transition duration-200 hover:translate-x-1  hover:shadow-xl'>
      {label}
    </NextLink>
  )
}
