import React from 'react';
import { useSelector } from 'react-redux';
import SideBarUser from '../../components/SidebarUser'; 
import ContentManagePageUser from '../../components/ContentManagePageUser';

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