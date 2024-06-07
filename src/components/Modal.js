'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export const Modal = () => {


    const [isOpen, setIsOpen] = useState(true); // Initially, modal is open

    const closeModal = () => {
        setIsOpen(false); // Set isOpen to false to close the modal
    };

    return (
        <div>
            {isOpen &&
                <div className="fixed inset-0 bg-[#4C4C4C] bg-opacity-[68%] overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="p-2 border md:w-[650px] w-[98%] h-[300px] shadow-lg rounded-md bg-white">
                        <div className='flex justify-end w-auto mx-auto'>
                            <button type='button' onClick={closeModal} className='text-fireRed text-5xl font-medium'>&times;</button>
                        </div>
                        <div className="flex flex-col justify-items-center md:gap-y-6 gap-y-4  py-2 md:px-6">
                            <textarea
                                maxLength="100"
                                rows="3"
                                style={{ maxHeight: "80px" }}
                                size="20"
                                placeholder='Add Messages (Optional)'
                                className='bg-[#EBEBEB] rounded-lg h-24 placeholder:text-sm text-sm  p-2 focus:outline-none focus:ring-1 focus:ring-gray-300' />

                            <button type='button' className=" sm:mx-24 mx-10 p-4 bg-fireRed text-white text-base font-bold rounded-full shadow-sm focus:outline-none ">Send Like</button>
                            {/* Navigates back to the base URL - closing the modal */}
                            <button onClick={closeModal} className='text-[#AD9E9E] text-base'>
                                Cancel
                            </button>

                        </div>

                    </div>
                </div>
            }
        </div>
    )
}
