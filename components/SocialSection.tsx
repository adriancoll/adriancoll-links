import { FC } from 'react'
import { LinkBox } from './LinkBox'

export interface ISocialSection {
  title: string
  links: Link[]
}

export interface Link {
  label: string
  href: string
  highlighted: boolean
}

interface Props {
  title: string
  links: Link[]
}

export const SocialSection: FC<Props> = ({ title, links }) => {
  return (
    <div className='pb-4 w-full'>
      <h3 className='text-white font-bold text-2xl'>{title}</h3>
      <div className='flex w-full flex-col gap-4 mt-6'>
        {links.map((link) => (
          <LinkBox key={link.href} link={link} />
        ))}
      </div>
    </div>
  )
}
