import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'

export default function Slide2() {
  return (
    <div id="about" className='w-full bg-[#000000]'>
        <Container>
            <div className="items-center xl:items-start w-full px-12 flex
            flex-col xl:flex-row justify-center
            xl:gap-24 2xl:gap-72
            ">
            <div className="max-w-2xl relative">
                <div className='mt-24 xl:mt-16 2xl:mt-[8rem]'/>
                <h1 className="text-white tracking-widest uppercase font-bold
                text-4xl
                sm:text-7xl 2xl:text-8xl
                text-center xl:text-left
                ">Web Development</h1>
                
                <div className='2xl:mt-[23.9rem]'/>
                <div className='text-center'>
                <Link className="bg-white px-20 py-5 rounded-full font-bold text-2xl mt-12 xl:mt-0
                transition-all duration-300 hover:scale-110 active:scale-95 inline-block" 
                href="#contact">Contact Now</Link>
                </div>      
                <div className='mt-0 xl:mt-40 2xl:mt-[11.5rem]'/>
            </div>




            <div className="relative max-w-xl xl:max-w-sm 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0 w-full"> 

                <div>
                  
                  <div className='mt-24 xl:m-52 2xl:m-[8rem]'/>

                  <div className='border-2 border-white rounded-2xl px-10 py-6 lg:px-20 lg:py-12 relative'>     
                    
                    {/* <div className='w-[200px] lg:w-[400px] xl:w-[800px] mx-auto flex-shrink-0 absolute  z-0'>
                       <Image
                          className=""
                          src="/images/layout6.png"
                          width={1000} height={1000}
                          alt="Layout 6"
                        />
                    </div> */}
                   

                    <li className="break-words mb-5 text-white relative z-10
                      sm:text-2xl 2xl:text-3xl ">
                      Build fast, modern websites with AI-powered tools.
                    </li>

                    <li className="break-words mb-5 text-white relative z-10
                      sm:text-2xl 2xl:text-3xl ">
                      Custom site creation tailored to your brand’s needs.
                    </li>

                    <li className="break-words mb-5 text-white relative z-10
                      sm:text-2xl 2xl:text-3xl ">
                      Launch professional sites without coding experience required.
                    </li>

                    <li className="break-words mb-5 text-white relative z-10
                      sm:text-2xl 2xl:text-3xl ">
                      Optimize performance and design with smart AI insights.
                    </li>

                    <li className="break-words mb-5 text-white relative z-10
                      sm:text-2xl 2xl:text-3xl ">
                      Scale your online presence quickly with intelligent automation.
                    </li>
                
                  </div>

                </div>
                

            </div>



            </div>
        </Container>
    </div>
  )
}
