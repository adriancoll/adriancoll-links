import Image from 'next/image'


export const Avatar = () => {
  return (
    <div className='relative grid h-24 w-24 place-content-center overflow-hidden rounded-full shadow-md shadow-gray-800'>
      <Image
        className='object- object-contain'
        width={96}
        height={96}
        alt='Adrián Coll Suarez'
        src='/yo.webp'
      />
    </div>
  )
}
