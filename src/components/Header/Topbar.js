import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo/logo.jpg';
import cartIcon from '../../assets/icon/shopping-cart.png';
import userIcon from '../../assets/icon/user.png';
import notifyIcon from '../../assets/icon/notify.png';
import { activeTab } from "../../redux/actions/managePage";

const Topbar = () => {
    const user = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    return (
        <div className="topbar">
            <NavLink className="navlink" to="/">
                <div className="topbar_logo">
                    <img src={logo} alt="logo" />
                </div>
            </NavLink>
            <div className="topbar_right">
                {!user.email ?
                    <div>
                        <NavLink className="navlink" to="/signin">
                            Đăng Nhập
                        </NavLink>
                    </div> :
                    <div className="topbar_right_list_icon">
                        <NavLink className="navlink" to="/manage" onClick={() => { dispatch(activeTab(2)) }}>
                            <div><img src={cartIcon} alt="cart" /></div>
                        </NavLink>
                        <NavLink className="navlink" to="/manage" onClick={() => { dispatch(activeTab(1)) }}>
                            <div><img src={userIcon} alt="user" /></div>
                        </NavLink>
                    </div>
                }
            </div>
        </div>
    )
}

export default Topbar;