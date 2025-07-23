import React from 'react';
import Link from 'next/link';
// import { Fragment } from 'react';
// import { MenuIcon } from '@heroicons/react/solid'; // Example icon

export default function page() {
  return (
    <main className="bg-transparent text-white font-sans antialiased">
      {/* Header Section */}
      <header className="bg-transparent py-6 fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto flex items-center justify-between px-4 xl:px-0">
          {/* Logo Placeholder */}
          <div className="text-5xl font-bold text-white">
            <h1 className="[font-family:var(--font-bebas-neue)] relative top-5 pb-12 font-bold
              ">
              R<span className='text-blue-500'>IE</span>L WEB
            </h1>
          </div>
          <ul className="hidden md:flex space-x-6 text-sm">
            <li>
              <a href="#" className="hover:text-blue-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Changelog
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full">
              Join waitlist
            </button>
            <div className="md:hidden">
              {/* <MenuIcon className="h-6 w-6 text-blue-300" /> */}
            </div>
          </div>
        </nav>
      </header>

    <div className='relative'>
      
      <div className="relative supernova-container animated-gradient-background min-h-screen flex items-center justify-center z-20">
        <div className='supernova z-40'></div>
      </div>
      <div className='z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='text-center mb-6'>
          <Link href="/" className='lg:mb-12 text-xl inline-block [font-family:var(--font-montserrat)] mx-auto text-center bg-transparent outline-2 outline-white text-white px-12 py-3 rounded-full text-black'>Check out our Portfolio</Link>
        </div>
        <h1 className=' font-light tracking-wide text-5xl lg:text-9xl text-center [font-family:var(--font-bebas-neue)] mb-3'>Riels AI: Your Smart <br/>Companion for Cambodia</h1>
        <p className='z-30 text-center mb-6 text-xl'>
          Getting answers just got simple. Riels AI provides instant, clear information on finance, education,<br/> and daily life in Khmer. No complex searches, just answers in your pocket.
        </p>
        <div className='text-center mb-6'>
          <Link href="/ai/chat" className='text-xl inline-block [font-family:var(--font-montserrat)] mx-auto text-center bg-white px-12 py-3 rounded-full text-black'>AI Chat</Link>
        </div>
        <p className='z-30 text-center text-xl italic'>
          Powered by OpenAI
        </p>
      </div>
      
    </div>





      {/* Hero Section */}
      <section className="py-24 md:py-36 bg-gradient-to-b from-black to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 xl:px-0 text-center">
          <div className="inline-block bg-blue-800 bg-opacity-75 text-blue-200 py-1 px-3 rounded-full text-xs mb-6">
            Latest integration just arrived
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Boost your <span className="text-blue-300">rankings</span> with AI.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
            Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full">
            Start for free
          </button>
          <div className="mt-12">
            {/* Main Dashboard Image Placeholder */}
            <div className="relative rounded-lg overflow-hidden shadow-lg mx-auto max-w-4xl">
              <div className="bg-blue-900 bg-opacity-50 aspect-w-16 aspect-h-9">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl italic">
                  Dashboard Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 xl:px-0 text-center">
          <p className="text-gray-400 text-sm mb-8">Trusted by the world&apos;s most innovative teams</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
            <span className="text-gray-300 font-semibold text-sm">Acme Corp</span>
            <span className="text-gray-300 font-semibold text-sm">Quantum</span>
            <span className="text-gray-300 font-semibold text-sm">Echo Valley</span>
            <span className="text-gray-300 font-semibold text-sm">PULSE</span>
            <span className="text-gray-300 font-semibold text-sm">Outside</span>
            <span className="text-gray-300 font-semibold text-sm">APEX</span>
            <span className="text-gray-300 font-semibold text-sm">Celestial</span>
            <span className="text-gray-300 font-semibold text-sm">2TWICE</span>
          </div>
        </div>
      </section>










      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 xl:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
          </h2>

     
        </div>
      </section>
    </main>
  );
}