import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404 not found!</h1>
            <Link to='/'>Go To Homepage</Link>
        </div>
    );
};

export default Error;