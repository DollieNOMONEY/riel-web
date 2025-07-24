import React from 'react';
import Link from 'next/link';
// import { Fragment } from 'react';
// import { MenuIcon } from '@heroicons/react/solid'; // Example icon

export default function page() {
  return (
    <main className="bg-transparent text-white font-sans antialiased">
      {/* Header Section */}
      <header className="bg-transparent py-6 fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto flex items-center justify-between lg:px-4 xl:px-0 ">
          {/* Logo Placeholder */}
          <div className="text-4xl lg:text-5xl font-bold text-white">
            <h1 className="[font-family:var(--font-bebas-neue)] relative left-4 font-bold
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
              Sign In
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
          <Link href="/" className='lg:mb-12 text-xs lg:text-xl inline-block [font-family:var(--font-montserrat)] mx-auto text-center bg-transparent outline-2 outline-white text-white px-3 lg:px-12 py-3 rounded-full text-black'>Check out our Portfolio</Link>
        </div>
        <h1 className=' font-light tracking-wide text-3xl lg:text-8xl text-center [font-family:var(--font-bebas-neue)] mb-3'>Riels AI: Your Smart <br/>Companion for Cambodia</h1>
        <p className='z-30 text-center mb-6 text-sm lg:text-xl'>
          Getting answers just got simple. Riels AI provides instant, clear information on finance, education,<br/> and daily life in Khmer. No complex searches, just answers in your pocket.
        </p>
        <div className='text-center mb-3'>
          <Link href="/ai/app" className='text-xl inline-block [font-family:var(--font-montserrat)] mx-auto text-center bg-white px-12 py-3 rounded-full text-black'>AI Chat</Link>
        </div>
        <p className='z-30 text-center text-sm italic'>
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
            Make your life <span className="text-blue-300">easier</span> with RIels AI.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
            Getting answers just got simple. Riels AI provides instant, clear information on finance, education,<br/> and daily life in Khmer. No complex searches, just answers in your pocket.
          </p>
          <Link href="/ai/app" className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-full">
            Try for free
          </Link>
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
          <p className="text-gray-400 text-sm mb-8">Powered by</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
            <span className="text-gray-300 font-semibold text-sm">ChatGPT-4o</span>
            <span className="text-gray-300 font-semibold text-sm">OpenAI</span>
            <span className="text-gray-300 font-semibold text-sm">Cambodian Professors</span>
            <span className="text-gray-300 font-semibold text-sm">Riels</span>
            <span className="text-gray-300 font-semibold text-sm">Riels Web</span>
            <span className="text-gray-300 font-semibold text-sm">Riels Marketing</span>
            <span className="text-gray-300 font-semibold text-sm">Riels Dev</span>
            <span className="text-gray-300 font-semibold text-sm">Riels Finance</span>
          </div>
        </div>
      </section>










      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 xl:px-0 text-center">
          
        <div className='text-center mb-6'>
          <Link href="/" className='lg:mb-12 text-xs lg:text-xl inline-block [font-family:var(--font-montserrat)] mx-auto text-center bg-transparent outline-2 outline-white text-white px-3 lg:px-12 py-3 rounded-full text-black'>Check out our Portfolio</Link>
        </div>
     
        </div>
      </section>
    </main>
  );
}