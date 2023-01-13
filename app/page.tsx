import { Avatar } from '../components/Avatar'
import { get } from '@vercel/edge-config'
import { SocialMediaRow } from '../components/SocialMediaRow'

export const dynamic = 'force-dynamic',
  runtime = 'edge'

export default async function HomePage() {
  const [socials, sections] = await Promise.all([
    get('socials'),
    get('sections'),
  ])

  return (
    <div className='prose lg:prose-xl'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Avatar />
        <h1>Adrián Coll Links</h1>
        <SocialMediaRow links={socials}  />
      </div>
    </div>
  )
}
