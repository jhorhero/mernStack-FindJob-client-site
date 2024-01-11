import React from 'react';

import { FiMapPin, FiSearch } from "react-icons/fi";
const Banner = ({query,handleChange}) => {
   
    
    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-24 px-4 md:py-20 py-14 '>
            {/* Banner Text  */}
            <div className=''>
<h1 className='lg:text-5xl mb-3 text-3xl md:text-5xl font-bold'> Find your <span className="font-bold text-pink-500 ">new job</span>  today</h1>
<p className='text-[rgba(0, 0, 0, 0.70)] mb-8 font-normal '>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
            </div>
            {/* Form text */}
            <form > 
                <div className='flex justify-start md:gap-0  flex-col  md:flex-row gap-4'>
                    <div className='flex md:rounded-s-md rounded ring-1 ring-inset ring-gray focus-within:ring-2 focus-within:ring-indigo-600 md:w-1/2  w-full'>
                        <input onChange={handleChange} value={query} placeholder='What  position are you looking for ?' type="text" name='title' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 p-4  ' />
                        <FiSearch className='absolute mt-2.5 ml-2' />
                    </div>
                    <div className='flex md:rounded-s-md rounded ring-1 ring-inset ring-gray focus-within:ring-2 focus-within:ring-indigo-600 md:w-1/3  w-full'>
                        <input  placeholder='Location' type="text" name='title' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 p-4  ' />
                        <FiMapPin className='absolute mt-2.5 ml-2' />
                    </div>
                    <button type='submit' className='bg-pink-500 text-white font-medium  px-5 rounded-md'> Search</button>
                </div>
            </form>
        </div>
    );
};

export default Banner;