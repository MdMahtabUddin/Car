import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink>
            <Link to="/home"></Link>
            <Link to="/services"></Link>

            </NavLink>
            
        </div>
    );
};

export default Header;