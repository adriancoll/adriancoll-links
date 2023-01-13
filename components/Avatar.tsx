import Image from 'next/image'

export const Avatar = () => {
  return (
    <div className='w-24 grid place-content-center h-24 rounded-full relative overflow-hidden shadow-md shadow-gray-800'>
      <Image
        className='object-contain object-'
        width={96}
        height={96}
        alt='Adrián Coll Suarez'
        src='/yo.webp'
      />
    </div>
  )
}
