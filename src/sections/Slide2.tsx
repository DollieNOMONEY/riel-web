import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Container from '@/components/Container'
import Image3 from '@/img/pic 3.png'
import Image9 from '@/img/pic 9.png'

export default function Slide2() {
  return (
    <div id="about" style={{ backgroundColor: "#38b6ff" }} className='w-full'>
        <Container>
            <div className="items-center w-full px-12 flex
            flex-col xl:flex-row justify-center 
            gap-24 2xl:gap-40
            ">
            <div className="max-w-2xl relative">
                <div className='mt-24 xl:mt-16 2xl:mt-48'/>
                <p className="font-bold
                text-6xl
                sm:text-8xl 2xl:text-8xl 
                text-center xl:text-left
                ">About</p>
                <p className="font-bold mb-12 xl:mb-12 2xl:mb-28 relative z-10 mt-4 
                text-6xl
                sm:text-8xl 2xl:text-8xl 
                text-center xl:text-left
                ">Riel.</p>
                {/* <Image 
                className="absolute top-20 z-0 
                max-w-[18rem] 
                sm:max-w-[28rem] 
                2xl:max-w-[36rem]
                sm:left-15 2xl:left-0
                w-[clamp(63vm, 80vm)] 
                left-[clamp(0rem,12vw,3rem)]"
                src={Image11} 
                alt="Blue Drawn Design"
                /> */}
                {/* <Image className='flex-shrink-0 min-w-[600px] dark:invert-100 w-[36rem] absolute top-[7rem] -left-48 z-0'
                src={Image11} alt="White Drawn Design"></Image>  */}
                <p className="break-words
                sm:text-2xl 2xl:text-2xl 
                ">
                Riel is your growth accelerator—dedicated to making
                business operations smoother, faster, and more
                profitable. We build custom web solutions that
                automate routine tasks, streamline workflows, and
                empower you to focus on what matters most: growing
                your business.
                </p>

                <div className='mt-16'/>
                <div className='text-center xl:text-left'>
                <Link style={{ backgroundColor: "#127ddd" }}  className="px-7 py-4 rounded-full font-extrabold text-lg" href="#offer">Our Offers</Link>
                </div>      
                <div className='mt-0 xl:mt-40 2xl:mt-[12.45rem]'/>
            </div>
            <div className="relative max-w-xl xl:max-w-sm 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0"> 
                <Image
                className="w-full mx-auto relative z-10 dark:invert-100
                w-[clamp(16rem, 60vw, 20rem)]
                2xl:ml-8"
                src={Image3} 
                alt="Two people chit-chatting"
                />
                <Image
                className="w-full mx-auto absolute z-0 left-0 bottom-0 dark:invert-100 
                w-[clamp(16rem, 60vw, 20rem)]
                2xl:ml-8"
                src={Image9} 
                alt="White shaped Background"
                />
            </div>
            </div>
        </Container>
    </div>
  )
}
