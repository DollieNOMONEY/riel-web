import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'
import Image1 from '@/img/pic 1.png'
import Image2 from '@/img/pic 2.png'


export default function Slide1() {
  return (
    <div className='w-full bg-white'>
        <Container>
          <div className="
          p-5 2xl:p-0 
          mr-0 2xl:mr-28
          max-w-9xl 2xl:min-w-[600px] 
          xl:order-2">
            <h1 className="[font-family:var(--font-bebas-neue)] relative top-5 pb-12
              text-6xl
              xl:hidden">
              R<span className='text-blue-500'>IE</span>L WEB
            </h1>
            <p className=" tracking-widest
            sm:text-8xl 2xl:text-9xl 
            mt-12 2xl:mt-48 
            text-6xl
            text-center 2xl:text-left
            ">Simplify</p>
            <div className='relative'>
              <p className="relative tracking-widest z-10 mt-3
              text-6xl sm:text-8xl 2xl:text-9xl 
              text-center 2xl:text-left
              ">Succeed</p>
              <Image 
             className="absolute  z-0 
             left-1/2 top-8 2xl:top-14
             -translate-x-1/2 -translate-y-1/2
             max-w-[18rem] 
             sm:max-w-[28rem] 
             2xl:max-w-[36rem]
             w-[clamp(63vm, 80vm)]"
              src={Image2} 
              alt="Blue Drawn Design"
              />
            </div>
            <p className="font-bold pt-10 pb-16 break-words
              px-2 2xl:px-0 
              sm:text-2xl 2xl:text-xl 
              lg:whitespace-nowrap lg:overflow-visible
              text-center 2xl:text-left
              ">
              Empowering your business with smart solutions.
            </p>
            <div className='text-center 2xl:text-left mb-15 2xl:mb-0'>
              <Link 
              style={{ backgroundColor: "#127ddd" }} 
              className="bg-blue-500 px-6 py-3 rounded-full font-extrabold" 
              href="#about">More Information
              </Link>
            </div>
            <div className='2xl:mt-[21.25rem]'/>
          </div>

          <div className="max-w-2xl flex-shrink-0 
            xl:min-w-[600px] 
            xl:order-1">
            <h1 className="[font-family:var(--font-bebas-neue)] relative
              xl:-bottom-12 2xl:bottom-18 
              xl:left-12 2xl:left-28
              text-6xl
              hidden xl:block">
              R<span className='text-blue-500'>IE</span>L WEB
            </h1>
            <Image
              className="w-full mx-auto
              w-[clamp(16rem, 60vw, 40rem)]
              2xl:ml-24"
              src={Image1} 
              alt="Two people chit-chatting"
            />
          </div>
        </Container>
      </div>
  )
}
