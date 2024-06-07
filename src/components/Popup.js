'use client'
import React, { useState } from 'react'
import '../app/commingSoon/global.css'
import { Checkbox } from '@material-tailwind/react';
import PhoneNumberInput from './PhoneNumberInput';
import { FcCancel } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closePopup = () => {
        setIsOpen(false);
    }

    return (
        <div>
            {isOpen &&
                <div className='popup-div'>
                    <div className='popup-div2'>
                        <div className='popup-close-div'>
                            <button type='button' onClick={closePopup} className='popup-close-btn'><IoClose color='black' className='md:size-7 size-4' /></button>
                        </div>
                        <div className='popup-div3'>
                            <p className='popup-p'>Join the waitlist so we can send exciting updates and the website launch date!</p>
                            <input type='text' placeholder='Enter your email' className='popup-input-mail' />
                            <div className='popup-input-mail'>
                                <PhoneNumberInput />
                            </div>
                            <div className='popup-check-div'> <input type='checkbox' value="unchecked" className="popup-check" /><label className="popup-check-lable">I agree to let FetishFinder send me updates about the website.</label></div>
                            <button type='button' className='popup-btn'>Join Now</button>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Popup
