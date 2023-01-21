import { Avatar } from '../components/Avatar'
import { get } from '@vercel/edge-config'

import { ISocialSection } from '../interfaces/social'

import {
  SocialSection,
  TSocialLink,
  GradientBox,
  SocialMediaRow,
  Blob,
} from '../components/'

export const dynamic = 'force-dynamic',
  runtime = 'edge'

export default async function HomePage() {
  const [socials, sections] = await Promise.all([
    get<TSocialLink[]>('socials'),
    get<ISocialSection[]>('sections'),
  ])

  return (
    <div>
      <div
        style={{
          translate: '-50% 0',
          left: '50%',
        }}
        className='blob h-[500px] w-[500px]  animate-tilt bg-gradient-to-r from-primary to-tertiary'></div>
      <div className='blob bottom-1 -right-1/3 bg-tertiary'></div>
      <div className='blob top-1/3 -left-1/2  animate-tilt bg-primary md:h-[500px] md:w-[500px] blur-[100px] lg:h-[750px] lg:w-[750px]'></div>

      <div className='relative flex flex-col items-center justify-center gap-7'>
        <Avatar />

        <h1 className='text-center text-5xl !mb-0 font-extrabold text-white'>
          Adrian - My Links
        </h1>

        <SocialMediaRow links={socials!} />

        <GradientBox>
          <article className='flex w-full flex-col gap-4'>
            {sections!.map((section) => (
              <SocialSection key={section.title} {...section} />
            ))}
          </article>
        </GradientBox>
      </div>
    </div>
  )
}
