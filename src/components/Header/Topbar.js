import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo/logo.jpg';
import cartIcon from '../../assets/icon/shopping-cart.png';
import userIcon from '../../assets/icon/user.png';

const Topbar = () => {
    const user = useSelector(state => state.user.userInfo);

    return (
        <div className="topbar">
            <div className="topbar_logo">
                <img src={logo} />
            </div>
            <div className="topbar_right">
                {!user.email ?
                    <div>
                        <NavLink className="navlink" to="/signin">
                            Đăng Nhập
                        </NavLink>
                    </div> :
                    <div>
                        <div><img src={userIcon}/></div>
                        <div><img src={cartIcon}/></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Topbar;