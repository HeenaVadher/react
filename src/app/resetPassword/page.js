'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const page = () => {

    const [value, setValue] = useState();


    return (
        <div className=''>
            <div className='flex w-screen font-Manrope '>
                <div className="grid md:grid-cols-2 w-full h-auto">
                    {/* {isMobile && <Navbar className="" />} */}
                    <div className='relative md:order-none bg-[#0F0F0F]'>
                        <img src='/Images/login1.png' className=' 2xl:h-[80vh] h-[84vh] w-full opacity-[20%] object-cover md:flex hidden' />
                        <div className='form-subdiv1'>
                            <span className='form-span '><img src='/Images/mainlogo.png' alt='logo' className='w-40 h-12' /></span>
                            <p className='form-p'>We care about user needs, that's why we want to make <br />simple steps so you can quickly join us</p>
                        </div>
                    </div>
                    <div className='bg-lightGray flex-col flex align-center justify-center gap-6 lg:px-20 px-5 py-10'>
                        {/* <div className=' grid align-middle justify-center via-lime-100 md:my-auto md:pb-2 gap-y-5 '> */}
                        <h1 className='font-light md:text-4xl text-3xl tracking-tight py-4  text-center'>RESET PASSWORD</h1>
                        <input type='password' placeholder='New Password' className='bg-transparent placeholder:text-xs placeholder:text-charcoalGray  rounded-full   md:h-16 h-12 px-6  border border-MediumGray   hover:border-fireRed focus:outline-none focus:border-fireRed' />
                        <input type='password' placeholder='Repeat Password' className='bg-transparent placeholder:text-xs placeholder:text-charcoalGray  rounded-full   md:h-16 h-12 px-6  border border-MediumGray   hover:border-fireRed focus:outline-none focus:border-fireRed' />
                        <button className='bg-fireRed rounded-full  md:h-16 h-12 text-sm font-semibold text-white '>LOGIN</button>
                        {/* </div> */}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page
