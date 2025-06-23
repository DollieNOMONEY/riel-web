import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import Image4 from '@/img/pic 4.png'
// import Image5 from '@/img/pic 5.png'
// import Image6 from '@/img/pic 6.png'
// import Image8 from '@/img/pic 8.png'
// import Container from '@/components/Container'

export default function Slide4() {
  return (
    <div id="info"
        className='w-full min-h-auto bg-neutral-200 dark:bg-neutral-950 items-center justify-center'>
        
        {/* <div className="block md:flex justify-center gap-[27.5rem] items-center w-full px-12 pt-16">
          <div className="max-w-2xl relative">
            <h2 className="text-8xl font-semibold mb-4 z-10 relative">More Info:</h2>
            <Image className='w-[36rem] absolute -top-5 z-0'
             src={Image8} alt="Pink Drawn Design"></Image>
          </div>
          <div className='ml-[45rem]'></div>
        </div> */}

        <div className="flex flex-col xl:flex-row justify-center xl:gap-[17rem] items-center w-full px-12 pt-16">
          <div className="max-w-2xl">
            <h2 className="font-semibold
                text-6xl md:text-7xl 2xl:text-8xl 
                text-center
                ">More Info:
                {/* xl:whitespace-nowrap xl:overflow-visible bg-amber-50 */}
            </h2>
          </div>
        </div>


        <div className='mt-12 xl:pt-0'/>

        
        <div className="flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-10 w-full px-12 md:px-60 lg:px-80 xl:px-12">
          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl px-7 py-4
          xl:h-[40rem]
          mb-5 xl:mb-0">
            <p className="text-3xl font-semibold mt-4 xl:h-40 ">Custom web platform streamline operations.</p>
            <p className="xl:h-65
            sm:text-2xl 2xl:text-2xl mb-12 mt-5 xl:mb-24 xl:mt-8 2xl:mt-0 2xl:mb-0">
              “Our web platform simplifies and
              automates your daily operations,
              saving you time and cutting costs.
              Experience seamless workflow
              management designed to boost
              your business efficiency and
              growth.”</p>
              <Link style={{ backgroundColor: "#127ddd" }} className="inline-block text-sm sm:text-lg px-7 py-4 rounded-full font-extrabold" href="#contact">Contact Now</Link>
          </div>

          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl px-7 py-4
          xl:h-[40rem]
          mb-5 xl:mb-0">
           <p className="text-3xl font-semibold mt-4 xl:h-40">Business tracking helping you track every step to business success.</p>
            <p className=" xl:h-65
            sm:text-2xl 2xl:text-2xl mb-12 mt-5 xl:mb-24 xl:mt-8 2xl:mt-0 2xl:mb-0">
              Business Tracking helps you
              monitor every crucial step of your
              operations with ease and
              accuracy. Stay informed, make
              smarter decisions, and drive your
              business toward lasting success.
            </p>
            <Link style={{ backgroundColor: "#127ddd" }} className="inline-block text-sm sm:text-lg px-7 py-4 rounded-full font-extrabold" href="#contact">Contact Now</Link>
          </div>


          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl px-7 py-4
          xl:h-[40rem]
          mb-5 xl:mb-0">
            <p className="text-3xl font-semibold mt-4 xl:h-40">Marketing, design, where strategy meets style — Track and Grow.</p>
            <p className="xl:h-65
            sm:text-2xl 2xl:text-2xl mb-12 mt-5 xl:mb-24 xl:mt-8 2xl:mt-0 2xl:mb-0">
              At the intersection of marketing
              and design, we bring you a
              platform where strategy meets
              style. Track your progress
              effortlessly and watch your
              business grow with smart, visually
              stunning tools.
            </p>
            <Link style={{ backgroundColor: "#127ddd" }} className="inline-block text-sm sm:text-lg px-7 py-4 rounded-full font-extrabold" href="#contact">Contact Now</Link>
          </div>
        </div>

        <div className='pt-28'/>
    </div>
  )
}
