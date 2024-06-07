import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import { GoHomeFill, GoHome } from "react-icons/go";
import { FaRegEnvelope, FaRegEnvelopeOpen, FaEnvelopeOpen, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegUser, FaUser } from "react-icons/fa6";
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

const BotttomTab = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isMsg, setIsMsg] = useState(false);
    const [isLikes, setIsLikes] = useState(false);
    const [isProfile, setIsProfile] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const isDash = pathname === '/'

    const tabs = [
        { path: '/', label: 'Home', icon: isHome => isHome ? <GoHomeFill size='27' /> : <GoHome size='27' /> },
        { path: '/message', label: 'Message', icon: isMessage => isMessage ? <FaEnvelopeOpen size='25' className='text-fireRed' /> : <FaRegEnvelope size='25' /> },
        { path: '/likes', label: 'Likes', icon: isLikes => isLikes ? <FaHeart size='25' className='text-fireRed' /> : <FaRegHeart size='25' /> },
        { path: '/profileBeforeMatch', label: 'Profile', icon: isProfile => isProfile ? <FaUser size='25' className='text-fireRed' /> : <FaRegUser size='25' /> }
    ];

    return (

        <div className='flex bg-black  text-[12px] justify-between rounded-t-3xl w-full px-4 h-20 items-center'>
            <Tab.Group>
                <Tab.List className=" justify-around flex w-full text-white  text-[12px] ">
                    {/* <Tab className=' items-center justify-center flex-col space-y-2 flex active:text-fireRed '
                        onClick={() => {
                            router.push('/')
                            setIsHovered(true)
                        }
                        }
                    >
                        {isHovered ? <GoHome size='27' /> : <GoHomeFill size="27" className='text-fireRed ' />}
                        Home
                    </Tab>
                    <Tab className=' items-center justify-center flex-col flex active:text-fireRed  '
                        onClick={() => {
                            router.push('/message')
                            setIsMsg(true)
                        }}
                    >
                        {isMsg ? <FaRegEnvelope size='25' /> : <FaEnvelopeOpen size='25' className="text-fireRed" />}
                        Message</Tab>
                    <Tab className=' items-center justify-center flex-col flex active:text-fireRed  '
                        onClick={() => {
                            router.push('/likes')
                            setIsLikes(true)
                        }}
                    >
                        {2 ? <FaRegHeart size='25' /> : <FaHeart size='25' className='text-fireRed' />}
                        Likes</Tab>
                    <Tab className=' items-center justify-center flex-col flex active:text-fireRed  '
                        onClick={() => router.push('/profileBeforeMatch')}
                    >
                        {3 ? <FaRegUser size='25' /> : <FaUser size='25' className='text-fireRed' />}
                        Profile</Tab> */}

                    {tabs.map(({ path, label, icon }) => (
                        <Tab
                            key={path}
                            className={`items-center justify-center flex-col gap-2 flex ${pathname === path ? 'text-fireRed' : 'text-white'}`}
                            onClick={() => router.push(path)}
                        >
                            {icon(pathname === path)}
                            {label}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    )
}

export default BotttomTab
