'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slide } from 'react-awesome-reveal';



const CardSlider = () => {
    const ary = [
        {
            imges: "/Images/logo1.svg",
            heading: "Safe and Accepting Community",
            desc: "FetishFinder provides a safe and accepting space for individuals with fetishes to explore their desires without fear of judgment or discrimination."
        },
        {
            imges: "/Images/logo2.svg",
            heading: "Privacy and Discretion",
            desc: "Prioritize privacy and discretion, ensuring that members' personal information remains confidential at all times through robust security measures."
        },
        {
            imges: "/Images/logo3.svg",
            heading: "Inclusive Environment",
            desc: "Platform fosters inclusivity, open communication, and consent, creating a positive atmosphere where members can connect with like-minded individuals"
        }

    ]
    return (
        <>
            <div className="sm:pt-10 my-4 lg:px-24 md:px-10 sm:px-12 px-4 relative h-56 mb-20 md:mb-10 rounded-lg  sm:h-auto border-1 border-[#0000000D] ">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{ dynamicBullets: true, clickable: true }}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    effect={'cards'}
                    breakpoints={{
                        // when window width is >= 320px
                        200: {
                            slidesPerView: 1,
                            // spaceBetween: 20
                        },
                        // when window width is >= 480px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            loop: true
                        },
                    }}
                    className="mySwiper justify-center items-center text-center text-[18px] flex"
                >
                    {ary.map((item, index) => {
                        return (
                            <SwiperSlide className=''>
                                <div className=" md:py-4 py-0 flex flex-col px-2 mb-2 rounded-lg h-52 md:h-[210px] space-y-2 w-full bg-white text-center shadow-md border  justify-center">
                                    <Slide direction='up'>
                                        <div className=' justify-center w-full flex items-center '><span className='bg-mistyRose size-14 justify-center flex items-center rounded-full '><img src={item.imges} className='text-fireRed' /></span></div>
                                        <h3 className='text-center text-darkBlue font-semibold text-[12px] lg:text-[22px] line-clamp-1 tracking-normal'>{item.heading}</h3>
                                        <p className='text-center md:text-[12px] text-[10px] text-spanishGray font-normal xl:leading-5 leading-4 tracking-wide '>{item.desc}</p>
                                    </Slide>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>


            </div>
        </>
    )
}

export default CardSlider




// const settings = {
//     // dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 3,
//     responsive: [
//         {
//             breakpoint: 1280,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite:true
//             }
//         },
//         {
//             breakpoint: 680,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true

//             }
//         }
//     ]
// };
{/* <Slider {...settings} >

                <div className="lg:py-8 md:py-4 py-8 px-2 mb-2 rounded-lg h-[220px] space-y-2 w-full bg-white text-center shadow-inner border flex flex-col justify-center">
                    <div className=' justify-center w-full flex items-center '><span className='bg-mistyRose size-14 justify-center flex items-center rounded-full '><img src='/Images/logo1.svg' className='text-fireRed' /></span></div>
                    <h3 className='text-center text-darkBlue font-semibold md:text-[16px] lg:text-[22px] line-clamp-1 tracking-normal'>Safe and Accepting Community</h3>
                    <p className='text-center text-[12px]  text-spanishGray font-normal xl:leading-5 leading-4 tracking-wide '>FetishFinder provides a safe and accepting space for individuals with fetishes to explore their desires without fear of judgment or discrimination.</p>
                </div>

                <div className="lg:py-8 md:py-4 py-8 flex flex-col px-2 mb-2 rounded-lg h-[220px] justify-center align-middle space-y-2 bg-white shadow-inner border">
                <div className=' justify-center w-full flex items-center '><span className='bg-mistyRose size-14 justify-center flex items-center rounded-full '><img src='/Images/logo2.svg' className='text-fireRed' /></span></div>
                    <h3 className='text-center text-darkBlue font-semibold md:text-[16px] lg:text-[22px] line-clamp-1 tracking-normal'>Privacy and Discretion</h3>
                    <p className='text-center  text-[12px]  text-spanishGray font-normal xl:leading-5 leading-4 tracking-wide '>Prioritize privacy and discretion, ensuring that members' personal information remains confidential at all times through robust security measures.</p>
                </div>
                <div className="lg:py-8 md:py-4 py-8 flex flex-col px-2 mb-2 rounded-lg h-[220px] justify-center align-middle space-y-2 bg-white shadow-inner border">
                <div className=' justify-center w-full flex items-center '><span className='bg-mistyRose size-14 justify-center flex items-center rounded-full '><img src='/Images/logo3.svg' className='text-fireRed' /></span></div>
                    <h3 className='text-center text-darkBlue font-semibold md:text-[16px] lg:text-[22px] line-clamp-1 tracking-normal'>Inclusive Environment</h3>
                    <p className='text-center  text-[12px]  text-spanishGray font-normal xl:leading-5 leading-4 tracking-wide  '>Platform fosters inclusivity, open communication, and consent, creating a positive atmosphere where members can connect with like-minded individuals
                        who share their passions.</p>
                </div>

            </Slider> */}
