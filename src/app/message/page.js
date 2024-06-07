'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Avatar } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FiSearch ,FiMoreVertical} from "react-icons/fi";
import { ReactSimpleChatbot } from 'react-simple-chatbot';


const page = () => {

    const [selectUser, setSelctUser] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [displayedTime, setDisplayedTime] = useState('');


    useEffect(() => {
        
        setSelctUser(userData[0]);
    }, []); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleUserData = (user) => {
        setSelctUser(user);
    }

    const handleSubmit = () => {

        console.log("Button CLICKED-------------")

        const newMessage = {
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit",hourCycle:'h12' }),
            user: 'me'  
        };
        setMessages([...messages, newMessage]);
        setDisplayedTime(newMessage.time);
        setInputValue('');
        console.log("mdnsndsmd",messages);

    };


    const userData = [
        {
            image: "/Images/ProImage1.png",
            name: 'Olive Yew',
            status: 'Hey congrats! you got a new match!',
            last: 'now',
        },
        {
            image: '/Images/ProImage2.png',
            name: 'William Fo',
            status: 'This is a fake message from a seller..',
            last: 'now',
        },
        {
            image: "/Images/ProImage3.png",
            name: 'Benjamin',
            status: 'This is a fake message from a seller..',
            last: 'now',
        },
        {
            image: '/Images/ProImage4.png',
            name: 'Charlotte Alex',
            status: 'Welcome to the hell',
            last: 'now',
        },
        {
            image: "/Images/ProImage5.png",
            name: 'Sebastian',
            status: 'Welcome to the hell',
            last: 'now',
        },
        {
            image: "/Images/ProImage6.png",
            name: 'Elizabethx',
            status: 'Welcome to the hell',
            last: 'now',
        },
        {
            image: "/Images/ProImage7.png",
            name: 'Jackson Fox',
            status: 'Welcome to the hell',
            last: '10/02/2023',
        },
        {
            image: "/Images/ProImage8.png",
            name: 'Matthew Wyatt',
            status: 'Welcome to the hell',
            last: 'Yesterday',
        },
        {
            image: "/Images/ProImage6.png",
            name: 'Elizabethx',
            status: 'Welcome to the hell',
            last: 'now',
        },
        {
            image: "/Images/ProImage7.png",
            name: 'Jackson Fox',
            status: 'Welcome to the hell',
            last: '10/02/2023',
        },
        {
            image: "/Images/ProImage8.png",
            name: 'Matthew Wyatt',
            status: 'Welcome to the hell',
            last: 'Yesterday',
        },
    ]

    return (
        <div>
            <Navbar />
            <div className='md:my-16 xl:mx-24 lg:mx-10  md:mx-4  flex  border-[0.5px] md:rounded-md h-[870px] bg-[#FBFBFB] border-[#E1E1E1] font-Manrope'>

                <div className='lg:w-[35.5%] w-full border-e-1 flex-col flex rounded-s-md  '>
                    <div className='h-[8.5%] relative border-b py-4 px-6 items-center text-center'>
                        <input type='search' placeholder='Search Match' className='  border w-full h-full rounded-full placeholder:text-xs py-2 px-8 text-sm focus:outline-none' />
                        <FiSearch className='absolute left-8 top-7 text-center text-[#636363]' />
                    </div>
                    <div className="no-scrollbar overflow-y-auto h-screen p-1 divide-y">
                        {userData.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center cursor-pointer p-3 hover:bg-gray-100  rounded-md " onClick={() => handleUserData(item)} >
                                    <div className="w-14 h-14 bg-gray-300 rounded-full  mr-3 relative">
                                        <img src={item.image} alt="User" className="w-14 h-14 rounded-full" />
                                        <div className='absolute bg-[#00B67A] rounded-full size-3 top-2 -right-1 border-[1px] border-white'></div>
                                    </div>
                                    <div className="flex-row gap-4 w-[80%]">
                                        <div className='flex justify-between'>
                                            <h2 className="text-sm font-semibold text-darkBlue leading-7">{item.name}</h2>
                                            <label className='text-[#959EA6] text-[10px] text-right font-medium'>{item.last}</label>
                                        </div>
                                        <p className="text-[#959EA6] text-xs font-light tracking-normal">{item.status}</p>
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>
                <div className='lg:w-[64.5%] w-full md:flex md:flex-col hidden border-l rounded-e-md'>
                    {selectUser && (
                        <>
                            <div className='h-[8.5%] border-b flex items-center '>

                                {/* {selectUser && (
                            <> */}
                                <div className="w-14 h-14 bg-gray-300 rounded-full   md:ml-8 ml-2 ">
                                    <img src={selectUser.image} alt="User" className="w-14 h-14 rounded-full" />
                                </div>
                                <div className="flex-row space-y-2 w-1/2 ml-2 p-2 text-start">
                                    <h2 className="text-sm font-semibold text-darkBlue ">{selectUser.name}</h2>
                                    <div className='flex  bg-[#00B67A] rounded-full size-2  items-center '><label className='text-[#08080A] text-[12px] ml-4 font-medium tracking-tight'>Online</label></div>
                                </div>
                                <FiMoreVertical size='24' className='justify-items-end   text-[#C4C4C4] ml-auto grid'/>

                                {/* </>
                        )} */}
                            </div>

                            <div className='h-[82%] border-b flex flex-col relative no-scrollbar overflow-y-auto p-4'>
                                {messages.map((message, index) => (
                                    <div key={index} className={`flex  ${message.user === 'me' ? 'justify-end' : 'justify-start'} mb-2`}>
                                        <div className={`flex ${message.user === 'me' ? 'bg-[#FFD9D9]' : 'bg-[#F1F1F1]'} py-2 px-4 text-xs rounded-full`}>
                                            {message.text}
                                        </div>
                                        {message.time && (
                                            
                                            <label className='text-[10px] text-[#959EA6] ml-2'>{message.time}</label>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* <div className='h-[82%] border-b flex relative no-scrollbar overflow-y-auto'>
                                <div className='absolute left-0 '>

                                    <div className="items-center justify-center m-4 flex ml-4 ">
                                        <img src={selectUser.image} alt="User" className="w-12 h-12 rounded-full " />
                                        <p className='bg-[#F1F1F1] py-2 px-4 mx-4 text-xs rounded-full'>xsldks</p>
                                    </div>
                                    <label className='text-[10px] text-[#959EA6] left-20 relative'>11:52pm, Tuesday, November 20 2022</label>
                                </div>
                                <div className='absolute right-0 '>
                                    {messages.map((message, index) => (

                                        <div key={index}>
                                            <p className={message.text.length === 0 ? 'hidden' : 'bg-[#FFD9D9] py-2 px-4 m-4 text-xs rounded-full'}>{message.text}</p>
                                            {message.time && (
                                            <label className='text-[10px] text-[#959EA6] -right-4 relative'>{message.time}</label>
                                            )}
                                        </div>

                                    ))}


                                </div>
                            </div> */}
                            <div className='h-[9.5%] flex items-center md:px-8 px-2 justify-between relative'>
                                <a><img src='/Images/attachment.png' /></a>
                                <input
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    autoFocus='true'
                                    inputMode='text'
                                    type='text'
                                    aria-multiline='true'
                                    enterKeyHint='enter'
                                    multiple={true}
                                    placeholder='Type a message'
                                    className='w-[95%] h-12 p-4 text-sm placeholder:text-[14px] tracking-wide rounded-full border-2 border-[#E2E8F0] focus:outline-none' />
                                <button className='absolute md:right-12 right-6 cursor-pointer' onClick={() => handleSubmit()}  ><img src='/Images/send.png' /></button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page