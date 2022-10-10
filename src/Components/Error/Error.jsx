import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-2/4 mx-auto my-6'>
            <h1 className='text-2xl'>404 page not found!</h1>
            <div className='my-5'><Link to='/' className='bg-cyan-300 py-2 px-5'>Go To Homepage</Link></div>
        </div>
    );
};

export default Error;