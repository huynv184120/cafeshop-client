import React from 'react';
import { useSelector } from 'react-redux';
import SideBarUser from './SidebarUser'; 
import ContentManagePageUser from './ContentManagePageUser';

const ManagePage = () => {
    const user = useSelector(state => state.user.userInfo);
    return (
        <div>
            {(user.role=="user")&&<div>
                <SideBarUser/>
                <ContentManagePageUser/>
            </div>}
        </div>
    )
}

export default ManagePage;