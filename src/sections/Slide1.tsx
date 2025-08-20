import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'

export default function Slide1() {
  return (
    <div className='w-full bg-black relative'>
      <Image
        src="/images/background/background1.png"
        alt="Layout 1 Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[25%] contrast-125 z-0"
        width={1920}
        height={1080}
      />
      <div className='absolute bottom-0 left-0 z-10 w-[200px] lg:w-[400px] xl:w-[800px]'>
        <Image
          src="/images/layout1.png"
          alt="Layout 1 Floating"
          width={800}
          height={800}
        />
      </div>
      <Container>
        <div className="flex flex-col relative z-20
          p-5 2xl:p-0
          mr-0 2xl:mr-28
          max-w-9xl 2xl:min-w-[600px]
          xl:order-2">
          {/* Mobile-first approach: Riels title for small screens */}
          <h1 className="relative top-5 pb-12 lg:pb-12 text-white
            text-6xl
            xl:hidden">
            RIELS
          </h1>
          <div className='relative'>
            <h1 className="text-white
              sm:text-8xl xl:text-7xl 2xl:text-9xl
              mt-8 2xl:mt-48
              text-4xl
              text-center xl:text-left
              ">RIELS UPDATE:</h1>
            <div className='lg:flex items-end gap-5 mb-12'>
              <h1 className="text-white
                sm:text-8xl 2xl:text-9xl
                text-4xl
                text-center 2xl:text-left
                ">
                GPT 5
              </h1>
              <p className="font-bold break-words text-white uppercase mb-5
                px-2 2xl:px-0
                text-xs sm:text-2xl 2xl:text-xl
                lg:whitespace-nowrap lg:overflow-visible
                text-center 2xl:text-left
                ">
                Powered by OpenAI
              </p>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-5 text-center 2xl:text-left mb-64 2xl:mb-0'>
            <p className="relative tracking-widest z-10 mt-3 text-white uppercase
              text-xl sm:text-xl 2xl:text-2xl
              text-center 2xl:text-left
              ">August 2025</p>
            <Link
              className="px-6 py-3 rounded-full font-extrabold outline-2 outline-[#127ddd] text-white
              transition-all duration-300 hover:bg-[#127ddd] hover:text-black hover:scale-105 active:scale-95
              mt-4 sm:mt-0"
              href="/ai/app">Open Chat
            </Link>
          </div>
          <div className='2xl:mt-[17.8rem]'/>
        </div>

        <div className="max-w-2xl flex-shrink-0
          xl:min-w-[600px]
          xl:order-1">
          <h1 className="relative text-white
            xl:bottom-[14rem] 2xl:bottom-[23rem]
            xl:left-28 2xl:left-32
            text-6xl
            hidden xl:block">
            RIELS
          </h1>
        </div>
      </Container>
    </div>
  )
}