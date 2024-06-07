'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { IoHeart, IoLocationOutline } from 'react-icons/io5'

const page = () => {

    const [showAll, setShowAll] = useState(false);


    const likesData = [
        {
            image: '/Images/likes1.png',
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: '/Images/likes2.png',
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: '/Images/likes3.png',
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: "/Images/likes4.png",
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: '/Images/likes5.png',
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: "/Images/likes6.png",
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: '/Images/likes3.png',
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
        {
            image: "/Images/likes4.png",
            name: 'Lisa Mark',
            age: '24',
            location: '2.5 miles away',
            h: ["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish"]
        },
    ]

    return (
        <div>
            <Navbar />
            <div className='lg:p-14 md:p-4 font-Manrope'>
                <h1 className='text-darkBlue md:block hidden text-4xl leading-8 font-extrabold text-center'>View 22 people who have liked you</h1>

                <div className='grid md:grid-cols-3 md:gap-4 gap-1  lg:p-10 md:mt-4 '>
                    {likesData.map((item, index) => {
                        {/* console.log("--------------------------", item, index) */ }
                        return (
                            <div key={index} className='relative inline-block'>
                                <img src={item.image} className='block  h-[460px] w-full  object-cover' />
                                <div className='p-4 absolute sm:z-10  bottom-0 space-y-2 bg-black/25 text-white w-full'>
                                    <h3 className='font-bold text-[22px] tracking-wide w-4/5'>{item.name},	&nbsp; {item.age}</h3>
                                    <text className='text-[12px] flex text-center'><IoLocationOutline size='20' />{item.location}</text>
                                    <div className='flex flex-wrap justify-between'>
                                        {item.h.slice(0, 3).map((ftag, i) => {
                                            return (
                                                <div key={i} className='bg-white text-center rounded-full lg:text-[11px] text-[10px] tracking-wide text-black xl:px-3 md:px-1 px-3 py-[6px] font-medium border border-[#E8E8E8]'>
                                                    <span key={i}>{ftag}</span>
                                                </div>
                                            )
                                        })}
                                        {item.h.length > 3 && (
                                            <div className='bg-white text-center rounded-full lg:text-[11px] text-[10px] tracking-wide  text-black md:px-1 xl:px-3 px-3  py-[6px] font-medium border border-[#E8E8E8] cursor-pointer' onClick={() => setShowAll(true)}>
                                                <span>+{item.h.length - 3} more</span>
                                                {/* {console.log("----------------",item.h)} */}
                                            </div>
                                        )}
                                        {showAll && item.h.slice(3).map((tag, i) => (
                                            <div key={i} className='bg-white flex-wrap text-center rounded-full text-[10px] text-black px-2 py-1 font-medium border border-[#E8E8E8]'>
                                                <span>{tag}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className='absolute right-2 xl:right-4 bg-fireRed rounded-full  p-2 top-2'> <IoHeart className='size-6 lg:size-7' /></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
