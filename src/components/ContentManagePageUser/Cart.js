import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const listProduct = useSelector(state => state.cart.listProduct);
    return (
        <div>
            {
                listProduct.map(item => <div>{item.name} {item.amount}</div>)
            }
        </div>
    )
}

export default Cart;