import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from './UserInfo';
import Cart from './Cart';
import './styles.css';

const ContentManagePageUser = () => {
    const tabActive = useSelector(state => state.managePage.activeTab);
    return (<div>
        {(tabActive==1)&&<UserInfo/>}
        {(tabActive==2)&&<Cart/>}
    </div>)
}

export default ContentManagePageUser;