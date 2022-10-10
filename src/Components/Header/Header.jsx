import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between items-center bg-teal-200 py-4 px-10'>
            <div className='text-3xl mb-5 md:mb-0'>Question Mania</div>
            <div className='flex md:flex-row flex-col justify-center items-center'>
                <NavLink to='/' className='mr-4 mt-3 bg-teal-400 shadow-lg w-full py-1.5 px-3 text-xl focus:underline'>Questions</NavLink>
                <NavLink to='statistics' className='mr-4 mt-3 bg-teal-400 shadow-lg w-full py-1.5 px-3 text-xl focus:underline'>Statistics</NavLink>
                <NavLink to='blog' className='mr-4 mt-3 bg-teal-400 shadow-lg w-full py-1.5 px-3 text-xl focus:underline'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;