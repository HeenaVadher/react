'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import "../app/globals.css"
import { usePathname } from 'next/navigation';

const NavMenu = () => {

    const [isMenu, setIsMenu] = useState(true);
    const closeMenu = () => {
        setIsMenu(false);
    }
    const pathname = usePathname();
    const isHome = pathname === '/';
    const isContact = pathname === '/contact';

    return (
        <div>
            {isMenu &&
                <div  className={`navMenu-div ${isMenu?"translate-x-0":"translate-x-full"} `}>
                    <span>  <ImCross onClick={closeMenu} className='navMenu-span' size='15' /></span>
                    <Link href="/" className='navMenu-Text'>Home</Link>
                    <Link href="/contact" className='navMenu-Text'>Contact</Link>
                    {!isHome && !isContact &&
                        <>
                            <Link href="/message" className='navMenu-Text'>Messages</Link>
                            <Link href="/likes" className='navMenu-Text'>Likes</Link>
                            <Link href="/profileBeforeMatch" className='navMenu-Text'>Profile</Link>
                        </>
                    }
                </div>
            }
        </div>
    )
}

export default NavMenu
