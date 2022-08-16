import React from "react";
import ProductCard from "./ProductCard";
import ManageProductCart from "./ManageProductCart";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

const ListProductCard = () => {
    const listProduct = useSelector(state => state.product.listProduct);
    const user = useSelector(state => state.user.userInfo);
    const Card = user.role=="user"? ProductCard : ManageProductCart;
    return <div className="list_product_card">
        { listProduct.map(item => {
                    <Card key={item.id} id={item.id} name={item.name} 
                    price={item.price} discount={item.discount} status={item.status}
                    description={item.description} imgUrl={item.imgUrl}/>
        })
        }
    </div>
}

export default ListProductCard;