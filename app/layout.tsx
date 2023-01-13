import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className='bg-red-50'>{children}</div>
}
