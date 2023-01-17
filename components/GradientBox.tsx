import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const GradientBox: FC<Props> = ({ children }) => (
  <section className='group relative w-full'>
    <div className='absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-tertiary opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200'></div>
    <div className='relative flex h-full w-full rounded-lg bg-gray-700 px-10 py-6'>
      {children}
    </div>
  </section>
)
