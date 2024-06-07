'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import '../../app/globals.css'
import PhoneNumberInput from '@/components/PhoneNumberInput';
import Link from 'next/link';
import { useRouter, redirect } from 'next/navigation';
import "../register/register.css"

const page = () => {

  const router = useRouter();

  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!email && !phone) {
      newErrors.emailOrPhone = 'Please provide either an email address or a phone number';
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
  
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    if (!confirmPass) {
      newErrors.confirmPass = 'Confirm Password is Required'
    }
    else if (password !== confirmPass) {
      newErrors.confirmPass = "Passwords must match"
    }
    return newErrors

  }
  const changePassword = (e) => {

    setPassword(e.target.value)
    const err = { ...errors }
    if (password.length < 8) {
      err.password = 'Password is too short - should be at least 8 characters';
    } else if (password.length > 10) {
      err.password = 'Password is too long - should be at most 10 characters';
    } else {
      const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
      if (!passReg.test(password)) {
        err.password = 'Password must contain at least one capital letter, alphabets, numbers, and a special character';
      } else {
        delete err.password;
      }
    }
    setErrors(err);
  }
  const handleSubmit = () => {

    const formErrors = validateForm();
    console.log("FOrmErrors------", formErrors)

    
    if (Object.keys(formErrors).length === 0) {
      // alert("Rgistration Successful")
       router.push('/verifyOTP');
      // redirect('/verifyOTP')
    }
    else {
      alert("Registration not Successful")
      setErrors(formErrors)
    }
  }
  return (
    <div>
      <div className='form-div'>
        <div className='relative flex  bg-[#0F0F0F] md:w-1/2  md:order-none '>
          <img src='/Images/login1.png' className=' 2xl:h-[140vh] xl:h-[120vh] h-full w-full md:flex hidden opacity-[30%] object-cover' />
          <div className='form-subdiv1'>
            <span className='form-span'><img src='/Images/mainlogo.png' alt='logo' className='w-40 h-12' /></span>
            <p className='form-p'>We care about user needs, that's why we want to make <br />simple steps so you can quickly join us</p>
          </div>
        </div>
        <div className='bg-lightGray flex-col flex md:w-1/2 2xl:pt-16'>
          <h1 className='font-light text-4xl tracking-tighter md:my-14 my-8  text-center'>SIGNUP</h1>
          <div className='   grid align-middle mx-10  p-2 md:pb-8 pb-10 gap-y-5'>
            <div className='flex md:flex-row md:flex flex-col w-full items-center justify-between md:space-x-1 space-x-0 md:space-y-0 space-y-1'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.emailOrPhone) setErrors({ ...errors, emailOrPhone: '' });
                }}
                className='input-pass' />

              <span className='w-6 h-6 text-center  text-charcoalGray  text-[12px] font-normal'>OR</span>
              <div className='flex items-center  input-pass'>
                <PhoneNumberInput value={phone}
                  onChange={(value) => {
                    setPhone(value);
                    if (errors.emailOrPhone) setErrors({ ...errors, emailOrPhone: '' });
                  }} />
              </div>
            </div>
            {errors.email && <span className='text-fireRed text-[10px] px-4 tracking-wider -mt-2'>{errors.email}</span>}
            <div className='space-y-2 flex-col flex'>
              <input type='password'
                placeholder='Password'
                value={password}
                onChange={changePassword}
                required
                className='input-pass' />
              {errors.password && <span className='text-fireRed text-[10px] tracking-wider px-4'>{errors.password}</span>}
            </div>
            <div className='space-y-2 flex-col flex'>
              <input
                type='password'
                autoComplete='current-password'
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
                placeholder='Confirmed Password'
                className='input-pass' />
              {errors.confirmPass && <span className='text-fireRed text-[10px] tracking-wider px-4'>{errors.confirmPass}</span>}
            </div>
            <button
              type='button'
              onClick={handleSubmit}
              className='bg-fireRed rounded-full w-full md:py-4 py-3  text-sm font-semibold text-white '>AGREE AND REGISTER</button>
            <div className=' flex items-center justify-center -my-1 gap-x-2'>
              <span><img src='/Images/Line 1.png' /></span>
              <h3 className='text-[#6A707C] text-sm font-medium'>Or</h3>
              <span><img src='/Images/Line 2.png' /></span>
            </div>
            <button className='flex items-center justify-center  rounded-full w-full py-2 md:py-4 text-sm border-MediumGray text-fireRed border hover:border-fireRed focus:outline-none focus:border-fireRed '>
              <span className='mx-4'> <FcGoogle size={30} /></span> Signup with google </button>
            <button className='flex  items-center justify-center  rounded-full w-full py-2 md:py-4 text-sm border-MediumGray text-[#FF2ECF] border hover:border-[#FF2ECF] focus:outline-none focus:border-[#FF2ECF] '>
              <span className='mx-4'> <img src='/Images/feetfinder.png' /></span> Signup with FeetFinder  </button>
            <lable className="flex justify-center items-center text-[12px] gap-1">Go back to <Link href='/login' className='text-fireRed'>Login</Link></lable>
          </div>

        </div>
        {/* </div> */}

      </div>
      <Footer />
    </div>
  )

}

export default page
