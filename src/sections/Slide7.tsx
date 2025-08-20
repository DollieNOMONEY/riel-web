import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Slide7() {
  return (
    <div 
        id="contact"
        style={{ backgroundColor: "#000000" }}
        className='relative w-full overflow-x-hidden min-h-auto flex items-center justify-center'>
        <img
        src="/images/background/background3.png"
        alt="Layout 3 Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[25%] z-0"
        width={1920}
        height={1080}
        />
        <div className="flex flex-col xl:flex-row justify-center xl:gap-12 2xl:gap-20 items-center w-full px-12 mt-6 relative z-20">
          <div className="max-w-8xl p-[4.5rem]">
            <div className="relative max-w-screen-xl p-12 rounded-3xl mb-20">
              <h1 className="text-left text-white tracking-widest uppercase font-bold
                text-5xl
                sm:text-8xl xl:text-8xl 
                ">Contact</h1>
            
              <div className="relative text-2xl sm:text-2xl 2xl:text-2xl">
              <p className="relative z-10 font-medium text-white">
                Got any questions? Reach out to us anytime.{" "}
                <span className="relative inline-block z-10">
                  We&apos;re here to help!
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
                  className="text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-3xl text-white" />
                </a>
                <a
                  href="https://www.instagram.com/riel_web"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram" 
                  className="text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-3xl text-white" />
                </a>
               
              </div>
            </div>
            <div className='mb-8 xl:mb-[9.4rem]'/>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-24 max-w-screen-xl p-8 rounded-3xl mb-8 text-white">
              <p className="text-2xl xl:text-3xl">Telegram</p>
              <a className="text-2xl xl:text-3xl font-bold transition hover:scale-105 active:scale-95 active:text-[#127ddd] hover:text-[#127ddd]" target="_blank" rel="noopener noreferrer" href="https://t.me/+85578799009">+855 (0)78799009</a>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-[8.5rem] max-w-screen-xl p-8 rounded-3xl xl:mb-[5.5rem] text-white">
              <p className="text-2xl xl:text-3xl">E-mail</p>
              <a className="text-2xl xl:text-3xl font-bold transition hover:scale-105 active:scale-95 active:text-[#127ddd] hover:text-[#127ddd]"
              href="mailto:rielweb2@gmail.com?subject=Interest%20in%20a%20Web%20Project&body=Hello!%20I'm%20Interested%20in%20a%20web%20project."
              >rielweb2@gmail.com</a>
            </div>
          </div>
          
          <div className="relative max-w-xl 2xl:max-w-2xl flex-shrink-0 mb-12 xl:mb-0"> 
                <Image
                  className="w-full mx-auto flex-shrink-0"
                  src="/images/layout8.png"
                  width={1000} height={1000}
                  alt="Layout 8"
                />
                <div className='text-center'>
                  <p className='xl:w-[28rem] mx-auto mt-4 mb-4 text-white'><i className='text-xl'>We’re dedicated to growing your store’s success
                  together, we turn potential into performance.</i></p>
                </div>
            </div>
        </div>
      </div> 
  )
}