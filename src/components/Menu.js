import { BiSolidUpArrow } from "react-icons/bi";
import React from 'react'

const Menu = () => {
    return (
        <div>
            <div className=''>
                <BiSolidUpArrow className="absolute sm:top-14 top-12 sm:right-6 right-5 items-center justify-center flex border-none text-white" size='10' />
                <ul className='  absolute z-10 md:-left-12 sm:top-16 top-[55px] right-0 w-36 px-2 text-xs border-none text-darkBlue/55 shadow-md grid gap-y-3 py-4  bg-white rounded-md font-Mulish'>
                    <lable className=''>abcxyz@a.com</lable>
                    <hr className="w-full"/>
                    <li>Home</li>
                    <li>Likes</li>
                    <li>Messages</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <li>SignOut</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
