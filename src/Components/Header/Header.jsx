import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>Question Mania</div>
            <div>
                <NavLink to='/'>Questions</NavLink>
                <NavLink to='statistics'>Statistics</NavLink>
                <NavLink to='blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;