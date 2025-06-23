'use client'
import React, { useEffect, useRef} from 'react'

import Lenis from '@studio-freight/lenis'
import Slide1 from '@/sections/Slide1'
import Slide2 from '@/sections/Slide2'
import Slide3 from '@/sections/Slide3'
import Slide4 from '@/sections/Slide4'
import Slide5 from '@/sections/Slide5'


export default function HomePage() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A') {
        const href = target.getAttribute('href')
        if (href && href.startsWith('#')) {
          const section = document.querySelector(href)
          if (section && lenisRef.current) {
            e.preventDefault()
            lenisRef.current.scrollTo(section as unknown as string | number | HTMLElement, {
              offset: 0,
              duration: 1,
              easing: (t) => 1 - Math.pow(1 - t, 3)
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])


  return (
    <div>
      <Slide1/>
      <Slide2/>
      <Slide3/>
      <Slide4/>
      <Slide5/>
    </div>
  )
}
