import React from "react";
import ProductCard from "./ProductCard";
import { getListProDuct } from "../../services/product";
import { useSelector, useDispatch } from "react-redux";
const ListProductCard = () => {
    const listProduct = useSelector(state => state.product.listProduct);
    return <div>
        { listProduct.map(item => 
        <ProductCard key={item.id} id={item.id} name={item.name} 
         price={item.price} discount={item.discount} status={item.status}
         description={item.description} />)
        }
    </div>
}

export default ListProductCard;