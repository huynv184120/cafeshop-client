import React from "react";
import logo from '../../assets/logo/logo.jpg'
import Button from 'react-bootstrap/Button';


const ManageProductCard = ({ id, name, price, discount, status, description, imgUrl }) => {
    if (!imgUrl) {
        imgUrl = logo;
    }

    return <div className='product_card'>
        <img alt="#" src={`http://${imgUrl}`} />
        <div>
            <div>
                <b>{name}</b><br />
                <b>{price} đ</b>
            </div>
            <Button variant="primary" >Sửa</Button>
        </div>
    </div>
}

export default React.memo(ManageProductCard);