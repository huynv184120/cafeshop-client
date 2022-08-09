import React from "react";
import logo from '../../assets/logo/logo.jpg'

const ProductCard = ({ id, name, price, discount, status, description, imgUrl }) => {
    if (!imgUrl) {
        imgUrl = logo
    }
    return <div className="product_card">
        <img src={imgUrl}/>
        <p className="product_card_name"><b>{name}</b></p>
        <p className="product_card_price"><b>{price} đ</b></p>
    </div>
}

export default ProductCard;