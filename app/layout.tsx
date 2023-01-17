import '../styles/globals.css'

import { DarkModeToggle } from '../components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='container h-screen bg-slate-500 pt-10  antialiased transition duration-150 dark:bg-slate-800 '>
        <DarkModeToggle />
        {children}
      </body>
    </html>
  )
}
