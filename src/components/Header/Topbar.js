import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo/logo.jpg'
const Topbar = () => {
    const isSignin = useSelector(state => state.user.isSignin);

    return (
        <div className="topbar">
            <div className="topbar_logo">
                <img src={logo} />
            </div>
            <div className="topbar_right">
                {!isSignin ?
                    <div>
                        <NavLink className="navlink" to="/signin">
                            Đăng Nhập
                        </NavLink>
                    </div> :
                    <div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Topbar;