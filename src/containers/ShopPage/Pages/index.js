import React from 'react';
import { useSelector } from 'react-redux';
import ManageProduct from './ManageProduct';

const Pages = () => {
    const tabActive = useSelector(state => state.managePage.activeTab);
    return (<div>
        {(tabActive==1)&&<ManageProduct/>}
    </div>)
}

export default Pages;