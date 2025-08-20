'use client'
import { useState } from 'react'
import Link from 'next/link';
// import Image from 'next/image'
// import Logo from '@/img/icons/precious_logo_black_croppped.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {

    const [menuOpened, setMenuOpened] = useState(false);
    function openMenu() {
        setMenuOpened(!menuOpened);
        // if (menuOpened == true) {
        //     document.body.style.overflow = "hidden";
        // }
        // else {
        //     document.body.style.overflow = "";
        // }
    }

  return (
    <nav className='w-full sticky top-0 z-10'>  {/* h-dvh  */}
    
        <div className='flex flex-col justify-between'> {/* h-dvh  */}
            <div className='w-full'>
                <div className='relative flex justify-between align-middle py-5 px-4 bg-white z-20'>
                    <div className='flex gap-5 md:w-3/6'>
                        <button onClick={openMenu} className='text-2xl opacity-75 lg:hidden'>☰</button>
                        <div className='hidden lg:inline relative bottom-1'>
                            <Link href="/" className='text-2xl text-bold hover:underline active:underline uppercase'>RIELS</Link>
                        </div>
                        <div className='hidden lg:inline'>
                            <Link href="/" className='text-sm hover:underline active:underline uppercase'>Back</Link>
                        </div>
                        {/* <div className='hidden lg:inline'>
                            <a className='text-sm  uppercase'>Chats</a>
                        </div> */}
                    </div>
                    {/* <Image
                        src={Logo}
                        alt="Precious"
                        width={100}
                        className='object-contain'
                    /> */}
                   <div className='flex gap-5 md:w-3/6 md:justify-end md:gap-5'>
                        {/* <span className=' hidden md:inline'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </span> */}
                        <div>
                            <span className='text-sm uppercase'>Guest</span>
                        </div>
                   </div>
                </div>
               { menuOpened && (
                <div className='absolute top-0 left-0 w-full h-dvh bg-[#000000a3]'>
                    <div className='flex flex-col justify-between fixed bg-white top-0 left-0 h-dvh w-5/6 z-10'>
                        <div>
                            <div className='mb-20'/>
                            {/* <input 
                            placeholder='SEARCH'
                            className='w-full p-2 border-b-2 opacity-35 outline-0 outline-transparent text-xs'
                            />  */}
                            <Link href="/updates" className='w-full p-3 uppercase hover:underline active:underline text-sm'>Blog</Link> 
                        </div>
                        
                        <div>
                            <div className='w-full p-3 uppercase text-sm'>
                                 <Link href="/" className='text-sm uppercase hover:underline active:underline'>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
               ) }
            </div>

            {/* { menuOpened && (
                
            )} */}
        </div>

    </nav>
  )
}
