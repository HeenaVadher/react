// components/Filter.js
'use client'

import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiXCircle } from 'react-icons/fi';
import "../app/globals.css"

const Filter = () => {
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState([0, 50]);
    const [age, setAge] = useState([18, 100]);
    const [gender, setGender] = useState('Female');
    const [fetishes, setFetishes] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState([]);


    const gen = ['Male', 'Female', 'Trans-Feminine', 'Trans-Masculine', 'Other']
    const fetishOption = ['Feet', 'BDSM', 'Roleplay', 'Billionare', 'Singer', 'Athlete', 'Glorry Artist', 'Other'];


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };


    const handleFetishChange = (e) => {
        const { value, checked } = e.target;
        setFetishes((prev) =>
            checked ? [...prev, value] : prev.filter((f) => f !== value)
        );
    };

    const handleSelect = (value) => {
        // setSelectedValue(value);
        setIsOpen(false)

        setSelectedValue(pre => {
            if (pre.includes(value)) {
                return pre.filter(item => item !== value);
            } else {
                return [...pre, value];
            }
        });
    }
    const applyFilters = () => {
        // Handle filter application logic here
        console.log({
            location,
            distance,
            age,
            gender,
            fetishes,
        });
    };

    const clearFilters = () => {
        setLocation('');
        setDistance([0, 50]);
        setAge([18, 100]);
        setGender('Female');
        setFetishes([]);
        setSelectedValue([]);
    };

    return (
        <div className="px-2">
            {/* <FiXCircle className='text-fireRed ml-48 ' size='20' /> */}
            {/* <FiXCircle className='text-fireRed ml-48 cursor-pointer ' size='20' onClick={closeDropdown} /> */}
            <div className='divide-y '>
                <div className="my-4 py-2 space-y-2 flex-col">
                    <label className="block text-darkBlue text-xs font-bold">Location</label>
                    <input type='search' value={location} onChange={(e) => setLocation(e.target.value)}
                        className='border-[0.5px] border-[#777777] px-3 py-1 w-full rounded-full text-xs text-darkBlue shadow-sm focus:outline-none' />
                </div>
                <div className="my-4 py-2 flex-col">
                    <div className='flex justify-between py-2'>
                        <label className="block text-darkBlue text-xs font-bold">Distance (Miles)</label>
                        <FiChevronUp />
                    </div>
                    <input
                        id="range"
                        type="range"
                        min="0"
                        max="100"
                        step="2"
                        value={distance[1]}
                        onChange={(e) => setDistance([0, parseInt(e.target.value)])}
                        className="my-4 shadow-lg shadow-slate-600 border w-[80%] h-[2px] mx-4 accent-fireRed rounded-sm appearance-none cursor-pointer bg-[#E0E0E0] focus:outline-none"
                    />
                    <div className="text-center text-darkBlue text-xs font-bold">{distance[1]} miles</div>
                </div>
                <div className="my-4 py-2 flex-col">
                    <div className='flex justify-between py-2'>
                        <label className="block text-darkBlue text-xs font-bold ">Age</label>
                        <FiChevronUp />
                    </div>
                    <input
                        type="range"
                        min="18"
                        max="100"
                        value={age[1]}
                        onChange={(e) => setAge([18, parseInt(e.target.value)])}
                        className='my-4   border w-[80%] h-[2px] mx-4  accent-fireRed rounded-sm appearance-none cursor-pointer bg-[#E0E0E0] focus:outline-none'
                    />
                    <div className="text-center block text-darkBlue text-xs font-bold">{age[1]} years</div>
                </div>
                <div className="my-4 py-2 space-y-2 flex-col">
                    <div className='flex justify-between py-2'>
                        <label className="block text-darkBlue text-xs font-bold">Gender</label>
                        <FiChevronUp />
                    </div>
                    <div className="mt-2 space-y-2">
                        {gen.map((g) => {
                            {/* alert("g---------------------------",g) */ }
                            return (
                                <div key={g} className="flex items-center">
                                    <label htmlFor={g}  className="container ">
                                     {/* ml-3 block text-[#7F7F7F] text-xs font-Manrope   */}
                                        {g}
                                    <input
                                        id={g}
                                        name="gender"
                                        type="checkbox"
                                        value={g}
                                        checked={gender === g}
                                        onChange={(e) => setGender(e.target.value)}
                                     
                                    />
                                    <span className='checkmark '></span>
                                    </label>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className="my-4 py-2 space-y-2 flex-col h-44">
                    <div className='flex justify-between py-2 '>
                        <label className="block text-darkBlue text-xs font-bold">Fetishes</label>
                        <FiChevronUp />
                    </div>
                    <div className='relative rounded-full flex p-2 text-center border-[0.5px] border-[#777777] justify-between focus:outline-none   ' onClick={toggleDropdown}>
                        <button className='lock text-[#777777] text-xs font-normal ' >Select Fetishes</button>
                        {!isOpen ? <FiChevronDown /> : <FiChevronUp />}

                        {isOpen &&
                            <div className='absolute w-full  z-10 top-8 right-0 p-2 origin-top-right block bg-white border rounded-2xl'>
                                <ul className='p-2 ' >
                                    {fetishOption.map((opt) => (
                                        <li key={opt}
                                            value={opt}
                                            onClick={() => handleSelect(opt)}
                                            className='text-darkBlue text-start text-xs py-1 font-Manrope'>
                                            {opt}
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        }
                        {/* <div className='bg-fireRed '> */}
                        {selectedValue.length > 0 && (
                            <div className='absolute top-8 w-full  mt-2 left-0 flex flex-wrap gap-2'>
                                {selectedValue.map((val, i) => (
                                    <>
                                        {/* <div className=' flex flex-wrap  absolute top-10 justify-between left-0 w-full bg-lime-200 '> */}
                                            <div key={i} className=' bg-white flex  text-center rounded-full text-[10px] md:text-[12px]  px-1 py-[2px] font-medium space-x-2 border border-[#E8E8E8]'>
                                                <span key={i} >{val}</span>
                                                {/* <button onClick={() => handleDelete(index)}>&times;</button> */}
                                            </div>
                                        {/* </div> */}
                                    </>
                                ))}
                            </div>
                        )}
                        {/* </div> */}

                    </div>
                    {/* <select
                        multiple
                        defaultValue='Select Option'
                        value={fetishes}
                        onChange={handleFetishChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        {fetishOption.map((f) => (
                            <option key={f} value={f}>
                                {f}
                            </option>
                        ))}
                    </select> */}
                </div>
                <div className="flex-col space-y-5">
                    <button type='submit'
                        onClick={applyFilters}
                        className="w-full inline-flex font-bold justify-center py-2 px-4 border border-transparent shadow-sm text-sm  rounded-full text-white bg-fireRed hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Apply Filters
                    </button>
                    <button type='reset'
                        onClick={clearFilters}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
