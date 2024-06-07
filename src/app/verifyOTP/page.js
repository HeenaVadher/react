'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OTPInput from 'react-otp-input'

const page = () => {

    const [otp, setOtp] = useState('');

    return (
        <div className=''>
            <div className='form-div'>
                {/* {isMobile && <Navbar className="" />} */}
                <div className='relative md:order-none md:w-1/2 bg-[#0F0F0F]'>
                    <img src='/Images/login1.png' className='h-[83.2vh] 2xl:h-[79vh] w-full opacity-[20%] object-cover md:flex hidden' />
                    <div className='form-subdiv1'>
                        <span className='form-span'><img src='/Images/mainlogo.png' alt='logo' className='w-40 h-12' /></span>
                        <p className='form-p'>We care about user needs, that's why we want to make <br />simple steps so you can quickly join us</p>
                    </div>
                </div>
                <div className='bg-lightGray md:w-1/2 flex-col flex justify-center px-6 mt-0 pb-2 gap-y-5  '>
                    {/* <div className='bg-lightGray  flex-col flex align-center justify-center gap-7 lg:px-20 px-5 py-10'> */}
                    {/* <div className=' grid align-middle justify-center via-lime-100 md:my-auto md:pb-2 gap-y-5 '> */}
                    <h1 className='font-light md:text-4xl text-3xl tracking-tight py-4   text-center'>VERIFY OTP</h1>
                    <div id='OTPInputGroup' data-autosubmit="true" className='flex gap-2 mx-auto   justify-center items-center   text-center'>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={5}
                            inputType='text'
                            inputStyle="inputStyle"
                            renderSeparator={<span className='px-1 text-[#3D3D3D7D]'>-</span>}
                            renderInput={(props) => <input {...props}
                            //  className= 'lg:px-8 sm:px-6 sm:py-2  px-4 py-1  border-r-2 text-center text-lg border border-[#3D3D3D7D] bg-transparent shadow-inner rounded-md active:outline-none focus:outline-none'

                            />}
                            shouldAutoFocus={true}

                        />
                    </div>
                    <button className='bg-fireRed rounded-full sm:mx-20 md:mx-10 sm:h-14 h-12 text-sm font-semibold text-white '>VERIFY</button>
                    {/* </div> */}

                </div>

            </div>
            <Footer />
        </div>
    )


}

export default page;




