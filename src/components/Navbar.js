'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Menu from './Menu';
import NavMenu from './NavMenu';
import Filter from './Filter';

const Navbar = () => {

  const router = useRouter();
  const pathname = usePathname()

  const isHome = pathname === '/';
  const isContact = pathname === '/contact';
  const isEditProfile = pathname === '/editProfile';
  const isUserProfile = pathname === '/userProfile';
  const isprofileBeforeMatch = pathname === '/profileBeforeMatch'
  const searchParams = useSearchParams();
  const isMessage = pathname === '/message';
  const isLike = pathname === '/likes';
  const isSubscribe = pathname === '/monthly_subscribe'
  const isAbout = pathname === '/about'


  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    setIsOpenProfile(false);
    setIsOpenFilter(false);
  }
  const toggleProfile = () => {
    setIsOpenProfile(!isOpenProfile);
    setIsOpenMenu(false);
    setIsOpenFilter(false);
  }
  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
    setIsOpenMenu(false);
    setIsOpenProfile(false);
  }

  return (
    <header className="nav-header">
      <div className="nav-div-logo">
        <Image src="/Images/mainlogo.png" alt="Fetish Logo" width={200} height={200} priority className="sm:w-[180px] sm:h-[54px] w-[139px] h-[41px]  " />
      </div>
      <div className="nav-menu-div">


        <a href='/' className={!isHome ? 'nav-menu-list' : 'nav-menu-list-select'}>Home</a>
        {isMessage && <>   <a href='/about' className={!isAbout ? 'nav-menu-list' : 'nav-menu-list-select '} >About Us</a></>}
        {!isHome && !isContact && <>
          <a href='/likes' className={!isLike ? 'nav-menu-list' : 'nav-menu-list-select '}>Likes</a>
          <a href='/message' className={!isMessage ? 'nav-menu-list' : 'nav-menu-list-select '}>Messages</a>
        </>}
        <a href='/contact' className={!isContact ? 'nav-menu-list' : 'nav-menu-list-select '}>Contact</a>
        {!isHome && !isMessage && !isContact && <> <a href='/monthly_subscribe' className={!isSubscribe ? 'nav-menu-list' : 'nav-menu-list-select '}>Subscription</a> </>}

      </div>
      <div className="sm:hidden left-0 relative order-first ">
        <button onClick={toggleProfile} className="text-3xl text-white " href="#">&#8801;</button>
        {isOpenProfile &&
          <>
            <NavMenu />
          </>
        }
      </div>

      {isHome || isContact ? (
        <div className="sm:flex hidden lg:gap-4 sm:gap-2 pr-4  ">
          <button type='button' onClick={() => router.push('/login')} className="text-darkCharcoal bg-white xl:w-[170px] md:h-12 sm:h-8 lg:text-lg  rounded-full text-center sm:px-7 lg:px-12  leading-6 font-medium">Login</button>
          <button onClick={() => router.push('/register')} className="text-white bg-fireRed xl:w-[150px] md:h-12  sm:h-8 lg:text-lg rounded-full text-center sm:px-5 lg:px-10 leading-6 font-medium">Signup</button>
        </div>
      ) : (
        <>
          {(isEditProfile || isprofileBeforeMatch || isUserProfile) &&
            <div className='flex sm:hidden relative right-2 w-10 text-base size-6 text-white'>
              <img src='/Images/Filter.png' alt='Filter' onClick={toggleFilter} />
              {isOpenFilter &&
                <div class="absolute  no-scrollbar overflow-y-auto h-max  top-12 -right-12 z-20  p-2 w-max  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <Filter />
                </div>}
            </div>}
          <div className=' flex justify-center relative size-14 md:mr-6 -mr-4 items-center'>
            <img src="/Images/profile2.png" alt="Profile Photo" className="rounded-full object-cover" onClick={toggleMenu} />
            <span className="z-10 relative -top-5 right-3 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fireRed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-fireRed"></span>
            </span>
            {isOpenMenu &&
              <>
                <Menu />
              </>}

          </div>
        </>
      )

      }

    </header>
  )
}

export default Navbar;
