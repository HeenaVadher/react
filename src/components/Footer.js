"use client"

import React, { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { GoHomeFill, GoHome } from "react-icons/go";
import { FaRegEnvelope, FaRegEnvelopeOpen, FaEnvelopeOpen, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegUser, FaUser } from "react-icons/fa6";
import BotttomTab from './BotttomTab';

const Footer = () => {

  const router = useRouter();

  const pathname = usePathname()
  const isMain = pathname === '/';
  const isLogin = pathname === '/login';
  const isRegister = pathname === '/register';
  const islike = pathname === '/likes';
  const isContact = pathname === '/contact';

  const [isHovered, setIsHovered] = useState(false);
  const [isMsg, setIsMsg] = useState(false);
  const [isLikes, setIsLikes] = useState(false);
  const [isProfile, setIsProfile] = useState(false);



  console.log();

  return (
    <>
      {isMain || isLogin || isRegister || isContact ? (
        <>
          <footer className='md:px-10  md:py-10 py-5 px-3 font-Manrope space-x-4 bg-charcoal flex  justify-between items-center text-start text-spanishGray md:text-base text-xs font-medium tracking-wider leading-6'>
            <div className='justify-between flex md:space-x-6 space-x-3'>
              <a>Privacy Policy</a>
              <a>DMCA Prolicy</a>
              <a>Complaints Policy</a>
            </div>
            <div>
              <h4 className=''>All rights are reserved @Fetishfinder</h4>
            </div>
          </footer>
        </>
      ) : (
        <>
          <footer className=' md:h-[100px] h-[78px] bg-charcoal sm:grid hidden  justify-center items-center text-center '>
            <h4 className='text-spanishGray md:text-lg text-sm font-medium tracking-wide leading-5'>All rights are reserved @Fetishfinder</h4>
          </footer>
          {/* <footer className={!islike ? 'sm:hidden bg-black rounded-t-2xl  flex' : 'sm:hidden bg-black rounded-t-2xl sticky flex'}> */}
          <footer className='sm:hidden bg-black rounded-t-2xl  flex' >
            <BotttomTab />
          </footer>
        </>
      )}


    </>
  )
}

export default Footer



// {(isMain || isContact ||  isLogin || isRegister )? 
//   <footer className='md:px-10  md:py-10 py-5 px-3 font-Manrope space-x-4 bg-charcoal flex  justify-between items-center text-start text-spanishGray md:text-base text-xs font-medium tracking-wider leading-6'>
//     <div className='justify-between flex md:space-x-6 space-x-3'>
//       <a>Privacy Policy</a>
//       <a>DMCA Prolicy</a>
//       <a>Complaints Policy</a>
//     </div>
//     <div>
//       <h4 className=''>All rights are reserved @Fetishfinder</h4>
//     </div>
//   </footer>
//    : <footer className='py-6  bg-charcoal grid  justify-center items-center text-center   md:w-full'>
//     <h4 className='text-spanishGray md:text-lg text-sm font-medium tracking-wide leading-5'>All rights are reserved @Fetishfinder</h4>
//   </footer>}