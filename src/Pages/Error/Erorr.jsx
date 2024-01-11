import React from 'react';
import { Link } from 'react-router-dom';

const Erorr = () => {
    return (
        <div className='h-screen w-full relative'>
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=900&t=st=1704964058~exp=1704964658~hmac=b722a88940abcc5376d02b0d1bf648141bd7651ab55554f87d17fcd4c8269554" alt="" className='relative h-screen' />
            <div className='absolute top-[50%] left-[70%]'>
               <Link to='/'> <button  className=' text-white py-4 rounded-xl text-xl font-thin ab px-16    bg-pink-600 shadow-lg shadow-yellow-500'> Go Back</button></Link> 
            </div>
        </div>
    );
};

export default Erorr;