import React from 'react';
import Nav from './Nav';
import Topbar from './Topbar';

const Header = () => {
    return <div className='header'>
        <Topbar/>
        <Nav/>
    </div>
}

export default Header;