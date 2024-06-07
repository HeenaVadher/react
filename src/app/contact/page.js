import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div name="contact" >
      <Navbar />
      <div className='w-screen flex md:flex md:flex-row flex-col-reverse h-auto lg:px-8 md:px-4 md:py-16 font-Manrope '>
        <div className='xl:pr-28 lg:pr-10  gap-6 grid md:w-[45%]  md:px-0 px-8  pt-4 pb-20'>
          <h1 className='text-darkBlue font-extrabold lg:text-[46px] sm:text-[36px] text-[25px] tracking-wider opacity-[80%] md:leading-[50px]'>We would love to hear from you...</h1>
          <p className='text-darkBlue font-normal text-[15px] w-[95%] leading-[30px] '>Feel free to contact us and we will get back to you as soon as possible. Fill this form or contact us directly.</p>
          <Link href="/" className="text-sky tracking-normal font-medium text-[20px] underline decoration-1">hello@fetishfinder.com</Link>
          <Link href="/" className="text-sky tracking-normal font-medium text-[20px] underline decoration-1 md:mt-0 -mt-4">Carson City, NV</Link>
          <div className='md:gap-y-4 grid md:mt-16 mt-5'>
            <h1 className='tracking-[5%] font-semibold text-[22px] leading-6'>Follow us</h1>
            <span className='mt-2 flex space-x-4 items-center'><img src='/Images/InstaBlack.png' alt='Instagram' className='size-6' /><p className='text-base font-normal leading-[40px]'>Instagram@fetishfinder</p></span>
            <span className='flex space-x-4 items-center'><img src='/Images/X.png' alt='X(Twitter)' className='size-6' /><p className='text-base font-normal leading-[40px]'>Twitter@fetishfinder</p></span>
          </div>
        </div>

        <div className=' xl:right-12 relative bg-lightGray2 md:bg-white  p-2 py-10 md:py-0 mx-2 md:mt-0 mt-8 rounded-2xl  md:w-[55%]'>
          {/* <div className=' '> */}
            <form className='md:bg-lightGray2 md:p-8  rounded-2xl  md:w-full  px-2 items-center justify-center flex-col space-y-8 '>
              <h1 className='text-darkBlue text-[25px] lg:text-[40px] font-bold md:leading-[50px] tracking-tight '>Get in touch with us</h1>
              <div className=' md:grid md:grid-cols-2  gap-4 mt-4 space-y-8 md:space-y-0'>
                <div className='space-y-4' >
                  <text className='text-darkBlue text-[16px] font-semibold leading-[20px] px-1'>Full Name</text>
                  <input type='text' name='name' placeholder='Full Name' className='rounded-full md:p-4 p-2 placeholder:text-[15px] border-[1px]  w-full border-bordergray placeholder:text-charcoalGray2 placeholder:font-medium' />
                </div>
                <div className='space-y-4 '>
                  <text className='text-darkBlue text-[16px] font-semibold leading-[20px] px-1'>Email</text>
                  <input type='text' name='name' placeholder='Email' className='rounded-full md:p-4 p-2  placeholder:text-[15px] border-[1px]  w-full border-bordergray placeholder:text-charcoalGray2 placeholder:font-medium' />
                </div>

              </div>
              <div className='space-y-4'>
                <text className='text-darkBlue text-[16px] font-semibold leading-[20px] px-1'>Subject</text>
                <input type='text' name="subject" placeholder='Subject' className='rounded-full p-4 placeholder:text-[15px] border-[1px] w-full border-bordergray placeholder:text-charcoalGray2 placeholder:font-medium' />
              </div>
              <div className='grid space-y-4'>
                <text className='text-darkBlue text-[16px] font-semibold leading-[20px] px-1'>Message</text>
                <textarea name='Messages' placeholder='Write the message here' className='rounded-xl md:h-40 h-28  p-4 placeholder:text-[15px] border-[1px] w-full border-bordergray placeholder:text-charcoalGray2 placeholder:font-medium' />
              </div>
              <button type='submit' className='w-full p-4 bg-fireRed rounded-full text-white font-medium tracking-wider text-[16px]  top-4'>SEND MESSAGE</button>
            </form>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
