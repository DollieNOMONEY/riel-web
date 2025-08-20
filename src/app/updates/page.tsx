import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function UpdatePage() {
  return (
    <div className='text-white'>
        <div className='bg-[#101010] w-full relative'>
            <Image
                src="/images/background/background4.png"
                alt="Layout 1 Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                width={1920}
                height={1080}
            />
            <div className='flex flex-col items-center w-full justify-center'>
                <div className="flex flex-col relative z-20 md:w-full
                p-5 
                mr-0 
                max-w-9xl
                ">
                    <div className='flex justify-between pt-5 px-5 mb-8'>
                        <div className='w-12 h-12 rounded-full bg-white'></div>
                        <div className='px-5 py-2 rounded-full bg-[#121212] flex gap-6 justify-around'>
                            <Image
                                src="/images/updates/icon2.png"
                                alt="AI Chat"
                                className="w-8 h-8"
                                width={48}
                                height={48}
                            />
                            <p className='relative top-1'>0</p>
                        </div>
                    </div>
                    <h1 className='text-white text-6xl text-center mb-5'>Riels AI</h1>
                    <h1 className='text-white text-xl text-center mb-8'>LOCAL KNOWLEDGE, GLOBAL AI POWER.</h1>
                    <div className='grid grid-cols-3 gap-4 rounded-2xl bg-[#121212a9] p-6 lg:p-8 md:mx-12 lg:mx-60 xl:mx-72 2xl:mx-96'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/images/updates/icon1.png"
                                alt="AI Chat"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                            <h6>AI Chat</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/images/updates/icon2.png"
                                alt="AI Chat"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                            <h6>Riel Token</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/images/updates/icon3.png"
                                alt="AI Chat"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                            <h6>Subscription</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/images/updates/icon4.png"
                                alt="AI Chat"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                            <h6>AI Voice</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/images/updates/icon5.png"
                                alt="AI Chat"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                            <h6>Version</h6>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Image
                                src="/images/updates/icon6.png"
                                alt="AI Chat"
                                className="w-12 h-12"
                                width={48}
                                height={48}
                            />
                            <h6>History</h6>
                        </div>
                    </div>

                    <div className="flex w-full justify-around p-32 rounded-3xl mb-20">
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
        
        <div className='flex flex-col items-center w-full justify-center bg-black'>
            <div className="flex flex-col relative z-20 md:w-full
            p-5 
            mr-0 
            max-w-9xl
            ">
                <h1 className='text-5xl'>Latest Updates</h1>
                <div className='flex flex-col md:flex-row md:justify-center gap-8 mt-8 mb-16 text-center'>
                    <div className='flex flex-col items-center md:w-[300px] xl:w-[500px]'>
                        <Image
                            src="/images/updates/latestupdate1.png"
                            alt="Update1"
                            className="p-12 mb-2"
                            width={500}
                            height={500}
                        />
                        <h2 className='text-3xl mb-2'>Now Powered by GPT-5 AI</h2>
                        <p>Experience smarter, faster, and more human-like AI.</p>
                    </div>
                    <div className='flex flex-col items-center md:w-[300px] xl:w-[500px]'>
                        <Image
                            src="/images/updates/latestupdate2.png"
                            alt="Update2"
                            className="p-12 mb-2"
                            width={500}
                            height={500}
                        />
                        <h2 className='text-3xl mb-2'>Our website just got a full redesign</h2>
                        <p>Modern, simple, and easier to explore.</p>
                    </div>
                    <div className='flex flex-col items-center md:w-[300px] xl:w-[500px]'>
                        <Image
                            src="/images/updates/latestupdate3.png"
                            alt="Update3"
                            className="p-12 mb-2"
                            width={500}
                            height={500}
                        />
                        <h2 className='text-3xl mb-2'>Explore new ways to earn and engage</h2>
                        <p>Our platform token makes rewards smarter, faster, and easier.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
