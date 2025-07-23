import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Image2 from '@/img/pic 2.png'

export default function Slide5() {
  return (
    <div id="pricing"
        className='w-full min-h-auto bg-neutral-100 items-center justify-center'>

        <div className="flex flex-col xl:flex-row justify-center xl:gap-[17rem] items-center w-full px-12 pt-16">
          <div className="max-w-2xl relative">
            <Image 
             className="absolute z-0 
             left-1/2 top-4 sm:top-8 2xl:top-14
             -translate-x-1/2 -translate-y-1/2
             max-w-[14rem] 
             sm:max-w-[20rem] 
             md:max-w-[25rem]
             xl:max-w-[25rem]
             2xl:max-w-[36rem]
             w-[clamp(63vm, 80vm)]"
              src={Image2} 
              alt="Blue Drawn Design"
            />
            <h2 className="font-semibold z-10 relative
                 text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl 
                text-center whitespace-nowrap
                ">Pricing Option:
                {/* xl:whitespace-nowrap xl:overflow-visible bg-amber-50 */}
            </h2>
          </div>
        </div>


        <div className='mt-12 xl:pt-0'/>

        
        <div className="relative flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-10 w-full px-12 md:px-60 lg:px-80 xl:px-12">
          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl px-7 py-4
          xl:h-[40rem]
          mb-5 xl:mb-0
          hover:scale-105 transition-transform">
            <div className='flex sm:gap-4 flex-col items-start sm:flex-row sm:items-end h-fit mb-5 xl:mb-10'>
              <p className="text-5xl sm:text-7xl font-semibold mt-4">$30</p>
              <p className="text-2xl flex items-end font-semibold mt-4 text-neutral-400">+5/month</p>
            </div>
            <p className='xl:mb-2 text-2xl sm:text-4xl font-semibold'>View/Layout</p>
            <p className="xl:h-24
            sm:text-2xl   2xl:text-xl mb-12 mt-5 xl:mb-0 xl:mt-8 2xl:mt-0 2xl:mb-0 xl:text-[1.2rem]">
            Perfect for small businesses, personal brands, or startups looking to have an online presence.</p>

            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-8 2xl:mt-0 2xl:mb-1">Home Page Design</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">About Section</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Contact Info Display</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Custom Banner or Hero Image</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Mobile-Friendly Design</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Speed Optimized</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-12 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Basic SEO Setup</li>
           
            <Link className="absolute bottom-5 right-6 inline-block text-sm sm:text-lg underline" href="#details">View Details</Link>
          </div>

          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl px-7 py-4 bg-[#38b6ff]
          xl:h-[40rem]
          mb-5 xl:mb-0
          hover:scale-105 transition-transform">
            <div className='flex gap-4 items-end h-fit mb-5 xl:mb-10'>
              <p className="text-5xl sm:text-7xl font-semibold mt-4">$200+</p>
            </div>
            <p className='xl:mb-2 text-2xl sm:text-4xl font-semibold'>App Develop</p>
            <p className="xl:h-24
            sm:text-2xl   2xl:text-xl mb-12 mt-5 xl:mb-0 xl:mt-8 2xl:mt-0 2xl:mb-0 xl:text-[1.2rem]">
            Ideal for startups and small businesses looking for an affordable, easy-to-use app to showcase services and engage users.</p>

            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-8 2xl:mt-0 2xl:mb-1">Login/Signup System</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Backend/API system</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Payment system</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Admin Dashboard</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Push Notifications</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Multilingual Supports</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Chat / Messaging</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-12 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Store / Orders / Cart</li>
           
            <Link className="absolute bottom-5 right-6 inline-block text-sm sm:text-lg underline" href="#details">View Details</Link>
          </div>


          <div className="relative xl:max-w-xs 2xl:max-w-md border-2 rounded-2xl px-7 py-4
          xl:h-[40rem]
          mb-5 xl:mb-0
          hover:scale-105 transition-transform">
            <div className='flex sm:gap-4 flex-col items-start sm:flex-row sm:items-end h-fit mb-5 xl:mb-10'>
              <p className="text-5xl sm:text-7xl font-semibold mt-4">$80</p>
              <p className="text-2xl flex items-end font-semibold mt-4 text-neutral-400">+10/month</p>
            </div>
            <p className='xl:mb-2 text-2xl sm:text-4xl font-semibold'>View/Layout<br className='sm:hidden'/>/Backend</p>
            <p className="xl:h-24
            sm:text-2xl   2xl:text-xl mb-12 mt-5 xl:mb-0 xl:mt-8 2xl:mt-0 2xl:mb-0 xl:text-[1.2rem]">
            Businesses that are scaling up, want to show professionalism, track leads, and have full control of their website content.</p>

            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-8 2xl:mt-0 2xl:mb-1">Custom Website Design</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Full Backend System (CMS)</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Sales or Client Tracker Dashboard</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-2 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Optional Basic Shop Setup</li>
            <li className="sm:text-2xl xl:text-[1.2rem] 2xl:text-xl mb-12 mt-5 xl:mt-2 2xl:mt-0 2xl:mb-1">Advanced SEO Setup</li>
           
            <Link className="absolute bottom-5 right-6 inline-block text-sm sm:text-lg underline" href="#details">View Details</Link>
          </div>
        </div>

        <div className='pt-[4.45rem]'/>
    </div>
  )
}
