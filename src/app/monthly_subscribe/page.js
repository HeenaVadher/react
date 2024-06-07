'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import '../monthly_subscribe/global.css'

const page = () => {

    const [selectBtn, setSelectBtn] = useState(0)
    const [priceBtn, setPriceBtn] = useState(0)

    return (
        <div className=''>
            <Navbar />
            <div className='div-main-sub'>
                <div>
                    <h1 className='h1-head-sub' >Choose Your Plan</h1>
                </div>
                <div className='div-btns-sub'>
                    <button onClick={() => setSelectBtn(0)} className={selectBtn === 0 ? 'btn-pack-red' : "btn-pack-black"}>Basic</button>
                    <button onClick={() => setSelectBtn(1)} className={selectBtn === 0 ? 'btn-pack-black' : 'btn-pack-red'}>Premium</button>
                </div>
                <div className='div-pack '>
                    {selectBtn === 0 ? (

                        <div className='btn-pack-disc'>
                            <div className=' flex space-x-3'><FaCheck className='btn-price-icon' /><p>Niche filters to find ideal match</p></div>
                            <div className=' flex space-x-3'><FaCheck className='btn-price-icon' /><p>100 likes per day</p></div>
                            <div className=' flex space-x-3'><FaCheck className='btn-price-icon' /><p>First to use exclusive features coming soon</p></div>
                        </div>
                    ) : (
                        <div className='btn-pack-disc'>
                            <div className=' flex space-x-3'><FaCheck className='btn-price-icon' /><p>Niche filters to find ideal match</p></div>
                            <div className=' flex space-x-3'><FaCheck className='btn-price-icon' /><p>Unlimited likes per day</p></div>
                            <div className=' flex space-x-3'><FaCheck className='btn-price-icon' /><p>First to use exclusive features coming soon</p></div>
                        </div>
                    )}
                    <div className='div-price-pack'>
                        <button
                            type='button'
                            onClick={() => setPriceBtn(0)}
                            className={`${priceBtn === 0 ? 'btn-price-pack-red' : 'btn-price-pack-white'} font-poppins`}>
                            {selectBtn === 0 ? '$4.99/mo' : '$14.99/mo'}
                            <span className='lg:text-sm text-xs font-Mulish '>Billed Monthly</span>
                        </button>
                        <button
                            type='button'
                            onClick={() => setPriceBtn(1)}
                            className={`${priceBtn === 0 ? 'btn-price-pack-white' : 'btn-price-pack-red'} font-Mulish`}>
                            {selectBtn === 0 ? 'Save $19.08' : 'Save $79'}
                            <span className='span-price'>{selectBtn === 0 ? '$3.4/mo' : '$8.4/mo'}</span>
                            <span className='span-billed'>Billed Yearly</span>
                        </button>
                    </div>
                </div>
                <button type='submit' className='btn-purchase'>Purchase</button>
                <Link href='...' className='link-why'>Why do  I need to pay?</Link>
            </div>
            <Footer />
        </div>
    )
}

export default page
