import '../styles/globals.css'

import { DarkModeToggle } from '../components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='container antialiased transition duration-150 prose h-screen bg-slate-500 pt-10 dark:bg-slate-800 lg:prose-lg'>
        <DarkModeToggle />
        {children}
      </body>
    </html>
  )
}
