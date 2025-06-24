import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'

import Image10 from '@/img/pic 10.png'
import Image7 from '@/img/pic 7.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Slide5() {
  return (
    <div 
        id="contact"
        style={{ backgroundColor: "#38b6ff" }}
        className='relative w-full overflow-x-hidden min-h-auto flex items-center justify-center'>
        <div className="flex flex-col xl:flex-row justify-center xl:gap-12 2xl:gap-20 items-center w-full px-12 mt-6">
          <div className="max-w-8xl p-[4.5rem]">
            <div className="relative max-w-screen-xl bg-white dark:bg-black p-12 rounded-3xl mb-20">
              <p className="font-bold text-left
                text-6xl
                sm:text-8xl xl:text-8xl 
                ">Contact</p>
            
              <div className="relative text-2xl sm:text-2xl 2xl:text-2xl">
              <p className="relative z-10 font-medium">
                Got any questions? Reach out to us anytime.{" "}
                <span className="relative inline-block z-10">
                  We&apos;re here to help!
                  <Image
                    src={Image10}
                    alt="Blue Drawn Design"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-[200%] max-w-none z-0 pointer-events-none opacity-50 brightness-75 contrast-200 saturate-100"
                  />
                </span>
              </p>
            </div>

             
               <div className='mt-16'/>
              <div className="flex gap-5">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/riel_web"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram" 
                  className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                </a>
               
              </div>
            </div>
            <div className='mb-8 xl:mb-36'/>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-24 max-w-screen-xl border-2 p-8 rounded-3xl mb-8">
              <p className="text-2xl xl:text-3xl">Telegram</p>
              <p className="text-2xl xl:text-3xl font-bold">+855 (0)78799009</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-[8.5rem] max-w-screen-xl border-2 p-8 rounded-3xl xl:mb-[5.5rem]">
              <p className="text-2xl xl:text-3xl">E-mail</p>
              <p className="text-2xl xl:text-3xl font-bold ">rielweb2@gmail.com</p>
            </div>
          </div>
          
          <div className="relative max-w-xl 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0"> 
              {/* <div className="max-w-2xl pr-12">
            <Image className='invert-100 flex-shrink-0 w-35 md:w-[600px]'
             src={Image7} alt="Two people chit-chatting"></Image>
          </div> */}
                <Image
                  className="w-full mx-auto dark:invert-100 flex-shrink-0"
                  src={Image7} 
                  alt="Two people chit-chatting"
                />
                <div className='text-center'>
                  <p className='xl:w-[28rem] mx-auto mt-4 mb-4'><i className='text-xl'>We’re dedicated to growing your store’s success
                  together, we turn potential into performance.</i></p>
                </div>
            </div>
        </div>
      </div> 
  )
}
