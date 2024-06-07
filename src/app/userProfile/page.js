'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
// import { Router, useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const page = ({ searchParams }) => {

    console.log("PARAMS--------------------", searchParams.name);
    const name = searchParams.name;
    const location = searchParams.location;


    const [selectedFiles, setSelectedFiles] = useState([]);
    const [activeTag, setActiveTag] = useState('')
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const [tags, setTags] = useState(["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish", "Add More"]);

    const router = useRouter();
    // ----------------Tag------------------
    const handleTag = (tag) => {
        setActiveTag(tag)
    }
    const handleDelete = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div className='font-Manrope'>
            <Navbar />
            <div className='xl:mx-24 md:mx-8 md:my-10 '>
                <div className='flex  md:gap-4 md:flex-row flex-col md:divide-none divide-y divide-[#EDEDED]'>
                    <div className=' md:w-[40%] w-full flex flex-col gap-3'>
                        <div className='rounded-xl md:bg-lightGray2 items-center py-10 gap-3 justify-center w-full flex flex-col'>
                            <div className=' rounded-full h-40 w-40 '>    {/* ring ring-offset-2 ring-white */}
                                <img src='/Images/profile2.png' />
                            </div>
                            <text className='text-darkBlue text-xl font-bold flex gap-2'>{name},24 <span><img src='/Images/Verified.png' /></span></text>
                            <text className='flex gap-2'><img src='/Images/location.png' />{location}</text>
                            <button onClick={() => router.push('/editProfile')} className='rounded-full md:my-4 font-medium text-base tracking-wide w-2/3 px-10 py-4 text-white bg-fireRed '>Edit Profile</button>
                        </div>

                    </div>

                    <div className='md:w-[60%] w-full inline-block md:space-y-4 '>
                        <div className='rounded-xl md:bg-lightGray2 md:px-8 px-4 py-6 inline-block space-y-4'>

                            <div className="inline-block relative w-full  space-y-3">
                                <label className="block text-darkBlue text-lg font-semibold " htmlFor="bio">   Bio</label>
                                <text type='text' placeholder='Bio' className='w-full animate-slideIn md:text-[#5E6469] text-[#919DA9] leading-[35px] lg:text-lg text-[12px] font-medium rounded-2xl text-left  md:line-clamp-none focus:outline-none' >
                                    It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.It is simply dummy text.
                                </text>
                                <div>
                                    <label className='text-darkBlue py-2 pt-3 text-lg tracking-wide font-bold'>Fetishes</label>
                                    <div className='grid lg:grid-cols-5  grid-cols-4 items-center  xl:px-3 place-content-around rounded-md h-24 '>
                                        {tags.map((tag, index) => (
                                            <>
                                                <div className=' flex justify-between   xl:gap-9 '>
                                                    <div key={index} className=' bg-white flex  text-center rounded-full text-[10px] md:text-[12px]  px-2 py-[4px] font-medium space-x-3 border border-[#E8E8E8]'>
                                                        <span key={index}>{tag}</span>
                                                        {/* <button onClick={() => handleDelete(index)}>&times;</button> */}
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
