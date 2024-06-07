'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Textarea } from '@/components/Textarea';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../editProfile/global.css"
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const page = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [startMonth, setStartMonth] = useState(new Date());
    const [startYear, setStartYear] = useState(new Date());
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [activeTag, setActiveTag] = useState('')
    const [images, setImages] = useState([]);
    const [proImg, setProImg] = useState();
    const [isDragging, setIsDragging] = useState(false);
    const [tags, setTags] = useState(["Sexyfeet", "Athlete", "Singer", "Billionare", "Glorry Artist", "Gitarist", "Footfetish", "Add More"]);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState([]);


    const fileInputRef = useRef(null);
    const proImageRef = useRef(null);

    const fetishOption = ['Foot Fetishism', 'Latex Fetish', 'Uniform Fetish', 'Exhibitionism', 'Voyeurism', 'Cross-dressing',
        'Leather Fetish', 'BDSM (Bondage, Discipline, Sadism, Masochism)', 'Role-playing Fetish', 'Body Piercing/Tattoo Fetish', 'Hair Fetish (e.g., long hair, shaved head)', 'Age Play', 'Pet Play', 'Medical Fetishism'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log('Event=====', event);

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit------');
        // router.push(`/userProfile?name=${name}`);
    };
    const selectImageFiles = () => {
        proImageRef.current.click();
    }
    const selectProfileImage = (event) => {

        if (event.target.files && event.target.files[0]) {
            setProImg(URL.createObjectURL(event.target.files[0]));
        }

    }

    const selectFiles = () => {
        fileInputRef.current.click();
        console.log("lldksldksldkslkd", fileInputRef);
    }
    const onFileSelect = (event) => {
        const files = event.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    },
                ]);
            }
        }
    }
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
    const deleteImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    }
    // ----------------Tag------------------
    const handleTag = (tag) => {
        setActiveTag(tag)
    }
    const handleDelete = (index) => {

        const newTags = [...selectedValue];
        newTags.splice(index, 1);
        setSelectedValue(newTags);

    };

    // Function to handle changes in day selection
    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    // Function to handle changes in month selection
    const handleMonthChange = (e) => {
        setMonth(e.target.value);
    };

    // Function to handle changes in year selection
    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    return (
        <div className='font-Manrope'>
            <Navbar />
            <div className='main-container '>
                <h1 className='h1-edit'>Edit Profile</h1>
                <div className='main'>
                    <div className='sub-div1'>
                        <div className='sup-sub-div1'>
                            <div className='pro-img-div' >
                                {proImg ? <img src={proImg} alt='Profile Photo' className='pro-img-div object-cover text-center text-xs ' /> : <img src="/Images/defaultProfile.jpg" className='pro-img-div  ' />}
                                <input type='file' name='file' multiple className='hidden-input' ref={proImageRef} onChange={selectProfileImage} />
                            </div>
                            <text className='text-pro'>Your Photo</text>
                            <lable className='lable-pro'>This will be displayed on your profile</lable>
                            <button type='button' onClick={selectImageFiles} className='btn-edit'>Edit Photo</button>
                        </div>
                        <div className='rounded-lg '>
                            <div className='drag-div'>
                                {isDragging ? (
                                    <p className='drag-p'>Drag and drop files, or Browse</p>
                                ) : (
                                    <>
                                        <div><text>Drag and Drop Images here or {''}</text>
                                            <span className='select' role='button' onClick={selectFiles}>Browse</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <input type='file' name='file' multiple className='hidden-input' ref={fileInputRef} onChange={onFileSelect} />
                            <div className='h-[80px] w-full flex my-2 '>
                                {images.map((image, index) => (
                                    <div className='drag-div-map' key={index}>
                                        <button onClick={() => deleteImage(index)} className='drag-btn-cancel'>&times;</button>
                                        <img className='drag-img' src={image.url} alt={image.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='sub-div2'>
                        <div className='sup-sub-div2'>
                            <h1 className='h1-head'>Personal Information</h1>
                            <div className='form-div'>
                                <text className='text-form'>Name</text>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    value={name}
                                    name={name}
                                    onChange={handleNameChange}
                                    className='name-input' />
                            </div>
                            <div className='form-div'>
                                <text className='text-form'>Date of Birth</text>
                                <div className='flex  gap-3'>

                                    <DatePicker
                                        placeholderText="DD"
                                        dropdownMode='scroll'
                                        dateFormat="dd"
                                        className="date-pick"
                                        showMonthDropdown={false}
                                        showYearDropdown={false}
                                        showWeekNumbers={true}
                                        // selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    <DatePicker
                                        placeholderText="MM"
                                        dropdownMode='select'
                                        className="date-pick"
                                        showMonthDropdown={true}
                                        dateFormat="MMMM"
                                        showYearDropdown={false}
                                        // selected={startMonth}
                                        showMonthYearPicker
                                        useShortMonthInDropdown={true}
                                        onChange={(month) => setStartMonth(month)} />
                                    <DatePicker
                                        dateFormat="yyyy"
                                        showYearPicker
                                        placeholderText="YYYY"
                                        dropdownMode='select'
                                        className="date-pick"
                                        // selected={startYear}
                                        onChange={(year) => setStartYear(year)}
                                        yearItemNumber={6}
                                    />

                                </div>
                            </div>


                            <div className="form-div">
                                <label className="text-form " htmlFor="gender">
                                    Gender
                                </label>
                                <select className="block w-full bg-white px-4 outline outline-1 outline-bordergray border-r-8 border-transparent rounded-full py-3 leading-tight focus:outline-none focus:bg-white focus:outline-bordergray active:bg-white" name='gender'>
                                     <option>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-div">
                                <label className="text-form" htmlFor="location">   Location</label>
                                <input type='text'
                                    placeholder='Location'
                                    value={location}
                                    name={location}
                                    onChange={(event) => setLocation(event.target.value)}
                                    className='name-input' />

                            </div>
                            <Textarea />
                        </div>
                        <div className=' fetishes-div'>
                            <label className='fetishes-lable'>Fetishes</label>
                            <div className='relative h-auto'>
                                <div className='relative flex-col  w-full flex p-1 text-center ' onClick={toggleDropdown}>
                                    <span className={`fetishes-dropdown ${isOpen && "focus:border-fireRed"} `}>Select fetishes
                                        {!isOpen ? <FiChevronDown className='fetishes-arrow' /> : <FiChevronUp className='fetishes-arrow' />}</span>
                                    {isOpen &&
                                        <div className='fetishes-dropdown-box'>
                                            <ul className=' ' >
                                                {fetishOption.map((opt) => (
                                                    <li key={opt}
                                                        value={opt}
                                                        onClick={() => handleSelect(opt)}
                                                        className='fetishes-dropdown-text'>
                                                        {opt}
                                                    </li>
                                                ))}

                                            </ul>
                                        </div>
                                    }
                                    {selectedValue.length > 0 && (
                                        <div className='fetishes-tag-div'>
                                            {selectedValue.map((val, i) => (
                                                <>
                                                    <div key={i} className='fetishes-tag'>
                                                        <span key={i} >{val}</span>
                                                        <button onClick={() => handleDelete(i)}>&times;</button>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='submit-div'>
                            <Link href={{
                                pathname: "/userProfile"
                                , query: {
                                    name: name,
                                    location: location
                                }
                            }} onSubmit={handleSubmit} className='btn-submit-div'>Submit</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
