'use client'

import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import '../login/login.css';
import '../globals.css'
import PhoneNumberInput from '@/components/PhoneNumberInput';
import { FcGoogle } from 'react-icons/fc';


const page = () => {

  const router = useRouter();
  const [value, setValue] = useState();

  return (
    <div className=''>
      <div className='form-div'>
        <div className='relative   bg-[#0F0F0F] md:w-1/2   '>
          <img src='/Images/login1.png' className='main-img ' />
          <div className='form-subdiv1'>
            <span className='form-span '>
              <img src='/Images/mainlogo.png' alt='logo' className='w-full h-full flex' />
            </span>
            <p className='form-p'>We care about user needs, that's why we want to make <br />simple steps so you can quickly join us</p>
          </div>
        </div>
        <div className='sub-login-div'>
          <h1 className='sub-login-h1'>LOGIN</h1>
          <div className='input-login-div1'>
            <input type='text' placeholder='Email' className='input-login-mail' />
            <span className='span-or-email'>OR</span>
            <div className='flex items-center input-login-mail'>
              <PhoneNumberInput />
            </div>
          </div>
          <div>
            <input type='password' placeholder='Password' className='input-login-mail' />
            <span className='forgot-pass' onClick={() => router.push('/forgotpassword')}>Forgot Password</span>
          </div>
          <button className='btn-login'>LOGIN</button>
          <div className='line-div'>
            <span><img src='/Images/Line 1.png' /></span>
            <h3 className='h3-span'>Or</h3>
            <span><img src='/Images/Line 2.png' /></span>
          </div>
          <button className='btn-signup '>
            <span className='mx-4'> <FcGoogle size={30} /></span> Signup with google </button>
          <h3 className='h3-account'>Dont have acount ? <span className='span-regi' onClick={() => router.push('/register')}>Signup</span></h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
