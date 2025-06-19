'use client'
import React, { useEffect, useRef} from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'

import Image1 from '@/img/pic 1.png'
import Image2 from '@/img/pic 2.png'
import Image3 from '@/img/pic 3.png'
import Image4 from '@/img/pic 4.png'
import Image5 from '@/img/pic 5.png'
import Image6 from '@/img/pic 6.png'
import Image7 from '@/img/pic 7.png'
import Image8 from '@/img/pic 8.png'
import Image9 from '@/img/pic 9.png'
import Image10 from '@/img/pic 10.png'
import Image11 from '@/img/pic 11.png'

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
      lenis.destroy(); // Clean up on unmount
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
      <div
        className='w-full bg-white dark:bg-black'>
        <div className="flex justify-center gap-64 items-center w-full px-12">
          <div className="max-w-2xl flex-shrink-0 min-w-[600px]">
            <h1 className="[font-family:var(--font-bebas-neue)] relative bottom-28 text-6xl">
              R<span className='text-blue-500'>IE</span>L WEB
            </h1>
            <Image 
              className='dark:invert-100 w-[37rem] ml-24'
              src={Image1} 
              alt="Two people chit-chatting"
            />
          </div>
          <div className="max-w-9xl mr-28">
            <p className="text-9xl mt-48 tracking-widest">Simplify</p>
            <div className='relative'>
              <p className="text-9xl mt-4 z-10 relative text-wh tracking-widest">Succeed</p>
              <Image 
              className=' w-[36rem] absolute -top-5 z-0'
              src={Image2} 
              alt="Blue Drawn Design"
              />
            </div>
            <p className="text-xl font-bold pt-10 pb-16">
              Empowering your business with smart solutions.
            </p>
            <Link 
              style={{ backgroundColor: "#127ddd" }} 
              className="bg-blue-500 px-6 py-3 rounded-full font-extrabold" 
              href="#about">More Information
            </Link>
            <div className='mt-[21.25rem]'/>
          </div>
        </div>
      </div>

      <div 
        id="about"
        style={{ backgroundColor: "#38b6ff" }}
        className='relative w-full min-h-aut flex items-center justify-center'>
        <div className="flex justify-center gap-72 items-center w-full px-12">
          <div className="max-w-2xl relative">
            <div className='mt-48'/>
            <p className="text-8xl mt-4 font-bold">About</p>
            <p className="text-8xl mt-4 font-bold mb-28 relative z-10">Riel.</p>
            <Image className='flex-shrink-0 min-w-[600px] dark:invert-100 w-[36rem] absolute top-[7rem] -left-48 z-0'
             src={Image11} alt="White Drawn Design"></Image>
            <p className="text-2xl">Riel is your growth accelerator—dedicated to making
            business operations smoother, faster, and more
            profitable. We build custom web solutions that
            automate routine tasks, streamline workflows, and
            empower you to focus on what matters most: growing
            your business.
            </p>
            <div className='mt-16'/>
            <Link style={{ backgroundColor: "#127ddd" }}  className="px-7 py-4 rounded-full font-extrabold text-lg" href="#offer">Our Offers</Link>
            <div className='mt-[12.45rem]'/>
          </div>
          <div className="relative max-w-2xl ">
            <Image className='min-w-[600px] flex-shrink-0 relative z-10 dark:invert-100 mr-24 w-full'
             src={Image3} alt="Two people chit-chatting"></Image>
            <Image className='absolute z-0 left-0 bottom-0 dark:invert-100 w-full'
             src={Image9} alt="White shaped Background"></Image>
          </div>
        </div>
      </div>

      <div id="offer"
        className='w-full min-h-auto bg-neutral-100 dark:bg-neutral-950 items-center justify-center'>
        <div className="flex justify-center gap-[17rem] items-center w-full px-12 pt-16">
          <div className="max-w-2xl">
            <h2 className="text-8xl font-semibold">What we offer:</h2>
          </div>
          <div className='ml-[45rem]'></div>
        </div>
        <div className='mt-5'/>
        <div className="flex justify-center gap-10 items-center w-full px-12">
          <div className="relative max-w-lg border-2 rounded-2xl">
             <Image className='dark:invert-100 w-full'
             src={Image4} alt="Two people having a conversation at a table"></Image>
            <p className="relative z-10 text-3xl font-bold mb-14 mx-14">Custom web platform streamline operations.</p>
            <Image className='w-[36rem] absolute top-[17rem] -left-32 z-0'
             src={Image10} alt="Blue Drawn Design"></Image>
          </div>
          <div className="relative max-w-lg border-2 rounded-2xl">
            <Image className='dark:invert-100 w-full'
             src={Image5} alt="Two hands from top to bottom holding a dialogue, a newspaper, step by step"></Image>
            <p className="relative z-10 text-3xl font-bold mb-5 mx-14">Business tracking helping you track every step to business success.</p>
            <Image className='w-[36rem] pointer-events-none absolute top-[17rem] -left-32 z-0 rotate-180'
             src={Image10} alt="Blue Drawn Design"></Image>
          </div>
          <div className="relative max-w-lg border-2 rounded-2xl">
            <Image className='dark:invert-100 w-full'
             src={Image6} alt="Three peopple doing their own thing"></Image>
            <p className="relative z-10 text-3xl font-bold mb-5 mx-14">Marketing, design, where strategy meets style — Track and Grow.</p>
            <Image className='w-[36rem] absolute top-[17rem] -left-32 z-0'
             src={Image10} alt="Blue Drawn Design"></Image>
          </div>
        </div>
        <div className='pt-12'/>
        <div className='text-center'>
          <Link style={{ backgroundColor: "#127ddd" }}  className="px-7 py-4 rounded-full font-extrabold text-lg" href="#info">More Info</Link>
        </div>
        <div className='pt-[4.3rem]'/>
      </div>

      <div id="info"
        className='w-full min-h-auto items-center justify-center'>
        <div className="flex justify-center gap-[27.5rem] items-center w-full px-12 pt-16">
          <div className="max-w-2xl relative">
            <h2 className="text-8xl font-semibold mb-4 z-10 relative">More Info:</h2>
            <Image className='w-[36rem] absolute -top-5 z-0'
             src={Image8} alt="Pink Drawn Design"></Image>
          </div>
          <div className='ml-[45rem]'></div>
        </div>
        <div className='mt-20'/>
        <div className="flex justify-center gap-10 items-center w-full px-12">
          <div className="max-w-lg border-2 rounded-2xl h-[34.5rem] px-7 py-4">
              <p className="text-3xl font-semibold mt-4 h-40">Custom web platform streamline operations.</p>
              <p className="text-2xl h-60">
              “Our web platform simplifies and
              automates your daily operations,
              saving you time and cutting costs.
              Experience seamless workflow
              management designed to boost
              your business efficiency and
              growth.”</p>
              <Link style={{ backgroundColor: "#127ddd" }} className="px-7 py-4 rounded-full font-extrabold text-lg" href="#contact">Contact Now</Link>
          </div>
          <div className="max-w-lg border-2 rounded-2xl h-[34.5rem] px-7 py-4">
            <p className="text-3xl font-semibold mt-4 h-40">Business tracking helping you track every step to business success.</p>
            <p className="text-2xl h-60">
              Business Tracking helps you
              monitor every crucial step of your
              operations with ease and
              accuracy. Stay informed, make
              smarter decisions, and drive your
              business toward lasting success.
            </p>
            <Link style={{ backgroundColor: "#127ddd" }} className="px-7 py-4 rounded-full font-extrabold text-lg" href="#contact">Contact Now</Link>
          </div>
          <div className="max-w-lg border-2 rounded-2xl h-[34.5rem] px-7 py-4">
            <p className="text-3xl font-semibold mt-4 h-40">Marketing, design, where strategy meets style — Track and Grow.</p>
            <p className="text-2xl h-60">
              At the intersection of marketing
              and design, we bring you a
              platform where strategy meets
              style. Track your progress
              effortlessly and watch your
              business grow with smart, visually
              stunning tools.
            </p>
            <Link style={{ backgroundColor: "#127ddd" }} className="px-7 py-4 rounded-full font-extrabold text-lg" href="#contact">Contact Now</Link>
          </div>
        </div>
        <div className='pt-[9.3rem]'/>
      </div>


      <div 
        id="contact"
        style={{ backgroundColor: "#38b6ff" }}
        className='relative w-full min-h-aut flex items-center justify-center'>
        <div className="flex justify-center gap-72 items-center w-full px-12 mt-6">
          <div className="max-w-9xl p-12">
            <div className="relative max-w-9xl bg-white dark:bg-black p-12 rounded-3xl mb-20">
              <p className="text-8xl font-bold mb-12">Contact</p>
              <p className="relative z-10 text-3xl">Got any questions? Reach out to us anytime. We&apos;re here to help!</p>
               <Image className='w-[36rem] absolute -top-8 -left-32 z-0'
             src={Image10} alt="Pink Drawn Design"></Image>
              <div className='mt-16'/>
            </div>
            <div className='mb-36'/>
            <div className="flex gap-24 max-w-9xl border-2 p-8 rounded-3xl mb-8">
              <p className="text-3xl">Telegram</p>
              <p className="text-3xl font-bold">+855 (0)78799009</p>
            </div>
            <div className="flex gap-[8.5rem] max-w-9xl border-2 p-8 rounded-3xl mb-[5.5rem]">
              <p className="text-3xl">E-mail</p>
              <p className="text-3xl font-bold">rielweb2@gmail.com</p>
            </div>
          </div>
          <div className="max-w-2xl pr-12">
            <Image className='invert-100 w-full flex-shrink-0 min-w-[600px]'
             src={Image7} alt="Two people chit-chatting"></Image>
             <div className='text-center'>
                <p className='w-[28rem] mx-auto mt-4 mb-4'><i className='text-xl'>We’re dedicated to growing your store’s success
                together, we turn potential into performance.</i></p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
