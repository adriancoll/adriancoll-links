import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className='container pt-10'>
        {children}
      </body>
    </html>
  )
}
