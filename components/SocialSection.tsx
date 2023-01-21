import { FC } from 'react'
import { Link } from '../interfaces/social'
import { LinkBox } from './LinkBox'



interface Props {
  title?: string
  links: Link[]
}

export const SocialSection: FC<Props> = ({ title, links }) => {
  return (
    <div className='w-full pb-4'>
      {title && <h3 className='text-2xl font-bold text-white'>{title}</h3>}
      <div className='mt-6 flex w-full flex-col gap-4'>
        {links.map((link) => (
          <LinkBox key={link.href} link={link} />
        ))}
      </div>
    </div>
  )
}
