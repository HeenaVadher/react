'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { IoLocationOutline } from "react-icons/io5";

import React, { useState } from 'react'
import { Modal } from '@/components/Modal';
import { FiArrowUp, FiChevronDown, FiChevronUp, FiX, FiXCircle } from 'react-icons/fi';
import { Checkbox } from '@material-tailwind/react';
import Filter from '@/components/Filter';
// import { SwiperSlide } from 'swiper/react'

const page = ({ searchParams }) => {

    const [tags, setTags] = useState(["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish", "Add More"]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isArrowOpen, setIsArrowOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [gender, setGender] = useState('Female');

    function onCheck(e) {
        const checked = e.target.checked;
        if (checked) {
            setIsDisabled(false)
        }
        if (!checked) {
            setIsDisabled(true)
        }
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };
    const imglist = [
        { image: "/Images/ImgGallery1.png" },
        { image: "/Images/ImgGallery2.png" },
        { image: "/Images/ImgGallery3.png" },
        { image: "/Images/ImgGallery4.png" },
        { image: "/Images/ImgGallery5.png" },
        { image: "/Images/ImgGallery6.png" },
    ]
    const name = searchParams.name;
    const location = searchParams.location;
    return (
        <div>
            <Navbar />

            <div className='py-4 space-x-2 px-20 md:flex hidden justify-end  items-center '>
                <label>Filter By : </label>
                <div class="relative inline-block  text-left">
                    <div className='flex items-center text-center'>
                        <button type="button" onClick={toggleDropdown} class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full  px-6 py-3 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            by Fetish   {!isOpen ? <FiChevronDown /> : <FiChevronUp />}
                        </button>
                    </div>
                    {isOpen &&
                        <div class="absolute  no-scrollbar overflow-y-auto h-max  -right-16 z-10  p-4  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <FiXCircle className='text-fireRed ml-48 cursor-pointer ' size='20' onClick={closeDropdown} />
                            <Filter />
                        </div>
                    }
                </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col-reverse gap-2 ">
                <div className=" flex-col flex md:w-[45%] lg:p-8 p-4 mx-auto relative">
                    <div className='flex'>
                        <div className=' rounded-full h-40 w-40 md:flex hidden'>    {/* ring ring-offset-2 ring-white */}
                            <img src='/Images/profile2.png' />
                        </div>
                        <div className='  items-center justify-between md:justify-center md:w-auto w-full sm:px-4 px-2 py-4 flex md:flex-col md:bg-white bg-black/25 md:relative md:top-0  absolute -top-52  left-0  z-10'>
                            <div>
                                <text className='md:text-darkBlue text-white text-xl font-bold flex gap-2'>Lisa Mark,24 <span><img src='/Images/Verified.png' /></span></text>
                                <text className='flex gap-2 md:text-darkBlue text-white text-xl'><IoLocationOutline size='30' className='text-white md:text-black' />LA</text>
                            </div>
                            <button
                                type='button'
                                onClick={() => toggleModal()}
                                className='rounded-full md:my-4 font-medium md:text-base text-sm tracking-wide lg:px-10 px-4  py-2 text-white bg-fireRed '>Send Likes</button>
                            {showModal &&
                                <Modal />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="inline-block relative w-full md:mt-0  -mt-20 space-y-3 md:mb-5">
                            <label className="block text-darkBlue text-lg font-semibold " htmlFor="bio">   Bio</label>
                            <text type='text' placeholder='Bio' className='w-full md:text-[#5E6469] text-[#919DA9] md:leading-7 lg:text-[16px] text-[12px] font-medium rounded-2xl text-left  md:line-clamp-none focus:outline-none' >
                                It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.It is simply dummy text of the printing and industry. Lorem Ipsum summy text of k.scrambled it to make a type specimen book.
                            </text>
                        </div>

                        <label className='text-darkBlue py-2 pt-3 text-lg tracking-wide font-bold'>Fetishes</label>
                        <div className='flex flex-wrap items-center  xl:px-3  gap-4 rounded-md h-24 '>
                            {tags.map((tag, index) => (
                                <>
                                    <div className=' flex    xl:gap-9 '>
                                        <div key={index} className=' bg-white flex  text-center rounded-full text-[10px] md:text-[12px] text-[#919DA9]  px-2 py-[4px] font-medium border border-[#E8E8E8]'>
                                            <span key={index}>{tag}</span>
                                            {/* <button onClick={() => handleDelete(index)}>&times;</button> */}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col md:w-[52%] mb-20">
                    <div>
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            spaceBetween={10}
                            freeMode={true}
                            pagination={{ dynamicBullets: true, clickable: true }}
                            loop={true}
                            modules={[Pagination, Navigation, Thumbs]}
                            effect={'cards'}
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-navigation-size': '20px',
                            }}
                            className="mySwiper justify-center items-center  flex"
                            onSlideChange={handleSlideChange}

                        >
                            {imglist.map((item, index) => {
                                return (
                                    <SwiperSlide className=' pb-6 md:pb-0 ' key={index}>
                                        <img src={item.image} className='block  h-[540px] w-full  object-contain' />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className='md:flex hidden'>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={0}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="    h-[15%] justify-center items-center flex bg-zinc-900 "
                        >
                            {imglist.map((item, index) => {
                                return (
                                    <SwiperSlide className={activeIndex === index ? 'opacity-100' : 'opacity-60'} key={index} >
                                        <img src={item.image} className='block h-[20vh] w-full  object-cover' />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page;
