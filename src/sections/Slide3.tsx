import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

export default function Slide2() {
  return (
    <div id="about" className='w-full bg-[#000000]'>
        <Container>
            <div className="items-center xl:items-start w-full px-12 flex
            flex-col xl:flex-row justify-center 
            xl:gap-24 2xl:gap-40
            ">
            <div className="max-w-2xl relative">
                <div className='mt-24 xl:mt-16 2xl:mt-20'/>
                <h1 className=" text-white tracking-widest uppercase font-bold
                text-5xl
                sm:text-7xl 2xl:text-8xl 
                text-center xl:text-left 
                ">BENEFITS</h1>

                <Image width={1000} height={1000} src="/images/layout3.png" alt="Layout 3" className="relative 2xl:-left-12 2xl:-top-12 mt-12"/>
            </div>




            <div className="relative max-w-xl xl:max-w-sm 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0 w-full"> 

                <div className='relative h-[46rem] mb-[5.7rem]'>

                  <div className='mt-24 xl:mt-16 2xl:mt-32'/>

                  <div className='bg-white aspect-square w-56 rounded-full text-center pt-12 absolute top-0 left-0 z-10'>
                    <p className="break-words font-bold
                      sm:text-2xl 2xl:text-2xl 
                      ">
                      Smart Insights
                    </p>
                    <p className="break-words mx-5
                      sm:text-2xl 2xl:text-2xl 
                      ">
                      AI for study, planning & analysis
                    </p>
                  </div>
          
                  <div className='border-1 rotate-[16deg] border-[#5b88b2] absolute w-full top-40 z-0'/>
                  
                  <div className='bg-[#5b88b2] aspect-square w-56 rounded-full text-center pt-20 absolute top-32 right-0 z-10'>
                    <p className="break-words mb-7 text-white mx-1
                      sm:text-2xl 2xl:text-2xl 
                      ">
                      Save time with smart insights
                    </p>
                  </div>

                  <div className='border-1 rotate-[-16deg] border-[#5b88b2] absolute w-full top-72 z-0'/>

                  <div className='bg-white aspect-square w-56 rounded-full text-center pt-10 absolute top-64 left-0 z-10'>
                    <p className="break-words font-bold mx-5
                      sm:text-2xl 2xl:text-2xl 
                      ">
                      Web Development
                    </p>
                    <p className="break-words
                      sm:text-2xl 2xl:text-2xl 
                      ">
                      Custom sites powered by AI
                    </p>
                  </div>

                  <div className='border-1 rotate-[16deg] border-[#5b88b2] absolute w-full bottom-72 z-0'/>

                  <div className='bg-[#5b88b2] aspect-square w-56 rounded-full text-center pt-15 absolute top-[25rem] right-0 z-10'>
                    <p className="break-words mb-7 text-white mx-7
                      sm:text-2xl 2xl:text-2xl 
                      ">
                      Create impactful content faster
                    </p>
                  </div>

                  <div className='border-1 rotate-[-16deg] border-[#5b88b2] absolute w-full bottom-40 z-0'/>

                  <div className='bg-white aspect-square w-56 rounded-full text-center pt-12 absolute top-[32rem] left-0 z-10'>
                    <p className="break-words font-bold mx-5
                      sm:text-2xl 2xl:text-2xl
                      ">
                      Content Clipping
                    </p>
                    <p className="break-words mx-5
                      sm:text-2xl 2xl:text-2xl
                      ">
                      Auto highlights for creators
                    </p>
                  </div>


              </div>
                

            </div>

            </div>
        </Container>
    </div>
  )
}
