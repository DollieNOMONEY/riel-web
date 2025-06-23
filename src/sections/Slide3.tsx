import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Image4 from '@/img/pic 4.png'
import Image5 from '@/img/pic 5.png'
import Image6 from '@/img/pic 6.png'
// import Image10 from '@/img/pic 10.png'

export default function Slide3() {
  return (
   <div id="offer"
        className='w-full min-h-auto bg-neutral-100 dark:bg-neutral-950 items-center justify-center'>
        
        <div className="flex flex-col xl:flex-row justify-center xl:gap-[17rem] items-center w-full px-12 pt-16">
          <div className="max-w-2xl">
            <h2 className="font-semibold
                text-6xl md:text-7xl 2xl:text-8xl 
                text-center 
                ">What we offer:
                {/* xl:whitespace-nowrap xl:overflow-visible bg-amber-50 */}
            </h2>
          </div>
        </div>


        <div className='mt-5 xl:pt-0'/>

        
        <div className="flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-10 w-full px-12 md:px-60 lg:px-80 xl:px-12">
          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl 
          xl:h-[40rem]
          mb-5 xl:mb-0">
             <Image className='dark:invert-100 w-full'
             src={Image4} alt="Two people having a conversation at a table"></Image>
             <p className="relative z-10 break-words font-bold mb-14 mx-14
                text-xl sm:text-2xl 2xl:text-3xl 
                ">
                  Custom web platform streamline operations.
              </p>

            {/* <Image className='w-[36rem] absolute top-[17rem] -left-32 z-0'
             src={Image10} alt="Blue Drawn Design"></Image> */}
          </div>

          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl 
          xl:h-[40rem]
          mb-5 xl:mb-0">
            <Image className='dark:invert-100 w-full'
             src={Image5} alt="Two hands from top to bottom holding a dialogue, a newspaper, step by step"></Image>
             <p className="relative z-10 break-words font-bold mb-14 mx-14
                text-xl sm:text-2xl 2xl:text-3xl
                ">
                  Business tracking helping you track every step to business success.
              </p>
            {/* <Image className='w-[36rem] pointer-events-none absolute top-[17rem] -left-32 z-0 rotate-180'
             src={Image10} alt="Blue Drawn Design"></Image> */}
          </div>


          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl 
          xl:h-[40rem]
          mb-5 xl:mb-0">
            <Image className='dark:invert-100 w-full'
             src={Image6} alt="Three peopple doing their own thing"></Image>
             <p className="relative z-10 break-words font-bold mb-14 mx-14
                text-xl sm:text-2xl 2xl:text-3xl
                ">
                  Marketing, design, where strategy meets style — Track and Grow.
              </p>
            {/* <Image className='w-[36rem] absolute top-[17rem] -left-32 z-0'
             src={Image10} alt="Blue Drawn Design"></Image> */}
          </div>
        </div>


        <div className='pt-12'/>

        <div className='text-center'>
          <Link style={{ backgroundColor: "#127ddd" }}  className="px-7 py-4 rounded-full font-extrabold text-lg" href="#info">More Info</Link>
        </div>

        <div className='pt-[3.8rem]'/>
    </div>
  )
}
