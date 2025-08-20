import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

export default function Slide2() {
  return (
    <div id="about" className='w-full bg-[#101010] relative'>
        <Image
          src="/images/background/background2.png"
          alt="Layout 2 Background"
          className="object-cover w-full h-full absolute brightness-[25%] contrast-125"
          width={1920}
          height={1080}
        />
        <Container>
            <div className="items-center xl:items-start w-full px-12 flex
            flex-col xl:flex-row justify-center
            xl:gap-24 2xl:gap-40
            ">
            <div className="max-w-2xl relative z-10">
                <div className='mt-24 xl:mt-16 2xl:mt-28'/>
                <h1 className="text-white tracking-widest uppercase font-bold
                text-6xl
                sm:text-7xl 2xl:text-8xl
                text-center xl:text-left
                ">OUR OFFER</h1>
            </div>

            <div className="relative max-w-xl xl:max-w-sm 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0 w-full z-10">

                <div className='absolute -z-0 -left-32 top-16 xl:top-56 2xl:top-72'>
                  <Image
                    src="/images/layout2.png"
                    width={1000}
                    height={1000}
                    alt="Layout 2 Floating Element"
                    className="object-cover w-[275px] h-full"
                  />
                </div>

                <div className='mt-24 xl:m-52 2xl:m-80'/>

                <div className='relative z-10'>
                  <p className="break-words font-bold mb-5 text-white
                  sm:text-3xl 2xl:text-4xl
                  ">
                  AI CHATBOTS THAT SPEAK YOUR LANGUAGE
                </p>

                <p className="break-words mb-7 text-white
                  sm:text-2xl 2xl:text-2xl
                  ">
                  AI that speaks Khmer, understands local needs, and helps people study and plan effectively
                </p>

                <hr className='border-[#5b88b2] border-b-2 mb-7'/>

                <p className="break-words font-bold mb-5 text-white
                  sm:text-3xl 2xl:text-4xl
                  ">
                  DEVELOP CUSTOM WEBSITES
                </p>

                <p className="break-words mb-7 text-white
                  sm:text-2xl 2xl:text-2xl
                  ">
                  Create professional, modern websites tailored for businesses
                </p>

                <hr className='border-[#5b88b2] border-b-2 mb-7'/>

                <p className="break-words font-bold mb-5 text-white
                  sm:text-3xl 2xl:text-4xl
                  ">
                  CREATE VIDEO CONTENT FOR CREATORS
                </p>

                <p className="break-words mb-5 text-white
                  sm:text-2xl 2xl:text-2xl
                  ">
                  Produce and edit engaging clips to grow your online audience
                </p>

                <div className='mt-24 xl:mt-16 2xl:m-[10.8rem]'/>

              </div>
            </div>


            </div>



        </Container>
    </div>
  )
}