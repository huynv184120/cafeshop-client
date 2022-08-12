import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
const Nav = () => {
    return <div className='navbar'>
        <NavLink className={({isActive}) => isActive ? "selected_navlink" : "navlink"} to="/">Trang Chủ</NavLink>
        <NavLink className={({isActive}) => isActive ? "selected_navlink" : "navlink"} to="/contact">Liên Hệ</NavLink>
        <NavLink className={({isActive}) => isActive ? "selected_navlink" : "navlink"} to="/event">Sự Kiện</NavLink>
    </div>
}

export default Nav;