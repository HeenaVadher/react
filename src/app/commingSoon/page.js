'use client'
import React, { useState } from 'react'
import '../commingSoon/global.css'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import Popup from '@/components/Popup'

const page = () => {

  const [showPopup, setShowPopup] = useState(false)

  const togglePopoup=()=>{
    setShowPopup(!showPopup);
  }

  return (
    <div className=''>
      <div className='sub-div'>
        {/* <div className='gap-8 justify-center items-center flex  flex-col'> */}
          <h1 className='heading'>FetishFinder</h1>
          <p className='disc-p'>FetishFinder is a dating app that connects people around the world with unique fetishes to fall in love and feel accepted.</p>
          <h4 className='head-h4'>Coming Soon</h4>
          <div className='flex gap-3 mt-6'>
            <button className='logo-div1'>  <FaTwitter className='tweet' /> </button>
            <button className='logo-div2'><FaInstagram className='insta' /></button>
          </div>

          <button type='button' onClick={togglePopoup} className='join-btn'>Join the waitlist</button>
          {showPopup && <Popup />}
        </div>
      </div>
    // </div>
  )
}

export default page
