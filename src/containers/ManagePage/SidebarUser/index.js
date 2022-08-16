//import useState hook to create menu collapse state
import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

import {
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHistory,
} from "react-icons/ai";
import "react-pro-sidebar/dist/css/styles.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { activeTab } from "../../../redux/actions/managePage";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const   SideBarUser = () => {
  const dispatch = useDispatch();
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const tabActive = useSelector(state => state.managePage.activeTab);
  const active = (value) => {
    dispatch(activeTab(value));
  }
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('user_id');
    navigate('../', { replace: true });
    window.location.reload();
  }

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={tabActive==1?true:false} icon={<AiOutlineUser />} onClick={()=> active(1)}> Thông tin cá nhân</MenuItem>
              <MenuItem active={tabActive==2?true:false} icon={<AiOutlineShoppingCart />} onClick={()=> active(2)}>Giỏ hàng</MenuItem>
              <MenuItem active={tabActive==3?true:false} icon={<AiOutlineHistory />} onClick={()=> active(3)}>Lịch sử đơn hàng</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Đăng suất</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBarUser;
