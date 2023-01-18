'use client'

import { useState, useEffect, useRef, createRef } from 'react'
import anime, { AnimeTimelineInstance } from 'animejs'

const moonPath =
  'M19 30C19 46.5685 30.5 60 30.5 60C13.9315 60 0.5 46.5685 0.5 30C0.5 13.4315 13.9315 0 30.5 0C30.5 0 19 13.4315 19 30Z'

const sunPath =
  'M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z'

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const timeline = useRef<AnimeTimelineInstance>()

  timeline.current = anime.timeline({
    duration: 750,
    easing: 'easeOutExpo',
  })

  useEffect(() => {
    if (darkMode) {
      document.querySelector('html')!.classList.add('dark')
    } else {
      document.querySelector('html')!.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((old) => !old)

    timeline.current!.add({
      targets: '.sun',
      d: [{ value: darkMode ? sunPath : moonPath }],
    })
  }

  return (
    <div
      className='absolute z-50 top-15 right-4 md:right-15 lg:top-20 lg:right-40 cursor-pointer'
      onClick={toggleDarkMode}>
      <svg
        className='duration relative pointer-events-none transition'
        id='darkMode'
        viewBox='0 0 60 60'
        width='60'
        height='60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          className='sun'
          fill='#FFD600'
          stroke-linecap='round'
          stroke-linejoin='round'
          d={sunPath}
        />
      </svg>
    </div>
  )
}
