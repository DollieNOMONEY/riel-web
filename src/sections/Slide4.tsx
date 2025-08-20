import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'

export default function Slide2() {
  return (
    <div id="about" className='w-full bg-[#ffffff]'>
        <Container>
            <div className="items-center xl:items-start w-full px-12 flex relative
            flex-col xl:flex-row justify-center
            xl:gap-24 2xl:gap-72
            ">
              <div className='absolute z-0 top-0 -left-14 w-[200px] lg:w-[400px] xl:w-[800px]'>
                <Image
                  src="/images/layout4.png"
                  alt="Blue Drawn Design"
                  width={1000} height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className='absolute z-0 bottom-0 -right-0 w-[200px] lg:w-[400px] xl:w-[800px]'>
                <Image
                  src="/images/layout5.png"
                  alt="Blue Drawn Design"
                  width={1000} height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            <div className="max-w-2xl relative">
                <div className='mt-24 xl:mt-16 2xl:mt-[8rem]'/>
                <h1 className="relative z-10 tracking-widest uppercase font-bold
                text-6xl
                sm:text-7xl 2xl:text-8xl
                text-center xl:text-left
                ">AI CHAT</h1>
                
                <div className='xl:mt-[30rem]'/>
                <div className='text-center'>
                <Link className="bg-[#5b88b2] px-20 py-5 rounded-full font-bold text-2xl mt-12 xl:mt-0
                transition-all duration-300 hover:scale-110 active:scale-95 inline-block
                " href="/ai/app">Open Chat</Link>
                </div>      
                <div className='mt-0 xl:mt-40 2xl:mt-[3rem]'/>
            </div>




            <div className="relative max-w-xl xl:max-w-sm 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0 w-full"> 

                <div className='mb-[8.65rem]'>
                  
                  <div className='mt-24 xl:mt-52 2xl:mt-[8rem]'/>

                  <div className='border-2 rounded-2xl px-10 py-6 lg:px-20 lg:py-12'>     

                    <li className="break-words mb-5 
                      sm:text-2xl 2xl:text-3xl ">
                      Get instant answers, ideas, and content suggestions.
                    </li>

                    <li className="break-words mb-5 
                      sm:text-2xl 2xl:text-3xl ">
                      AI that helps plan, study, and stay organized.
                    </li>

                    <li className="break-words mb-5 
                      sm:text-2xl 2xl:text-3xl ">
                      Chat-based assistant built for creators and teams.
                    </li>

                    <li className="break-words mb-5 
                      sm:text-2xl 2xl:text-3xl ">
                      Simplify research, tasks, and brainstorming with AI help.
                    </li>

                    <li className="break-words mb-5 
                      sm:text-2xl 2xl:text-3xl ">
                      24/7 smart support for planning, writing, and strategy.
                    </li>

                    <li className="break-words mb-5 
                      sm:text-2xl 2xl:text-3xl ">
                      Auto content clipping for creators and marketers.
                    </li>

                    <li className="break-words mb-2
                      sm:text-2xl 2xl:text-3xl ">
                      Possible solutions were proposed.
                    </li>
                
                  </div>

                </div>
                

            </div>



            </div>
        </Container>
    </div>
  )
}
