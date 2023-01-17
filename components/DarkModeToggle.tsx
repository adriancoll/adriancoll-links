'use client';

import { useState, useEffect } from 'react'

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.querySelector('html')!.classList.add('dark')
    } else {
      document.querySelector('html')!.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((old) => !old)

  return (
    <div className='absolute top-20 right-20' onClick={toggleDarkMode}>
      {darkMode ? 'dark' : 'light'}
    </div>
  )
}
