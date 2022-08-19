import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { order as makeOrder } from "../../../services/order";
import {
  removeProductFromCart,
  addProductToCart,
  resetCart,
} from "../../../redux/actions/cart";
import Button from "react-bootstrap/Button";
import { pushNotification } from "../../../utils/notify";

const Cart = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.cart.listProduct);
  const [address, setAddress] = useState("");

  const handleMakeOrder = async () => {
    const order = {};
    order.items = listProduct.map((item) => ({
      productId: item.id,
      amount: item.amount,
    }));
    order.address = address;
    makeOrder(order).then((data) => {
      dispatch(resetCart());
      if (data.appStatus == -1) {
        pushNotification("that bai", "hien khong co nhan vien nao o cua hang");
      } else
        pushNotification("thanh cong", "xin vui long cho nhan vien cua hang kiem tra");
    });
  };
  return (
    <div className="container_custom_table">
      <table class="custom_table table">
        <thead>
          <tr>
            <th scope="col">Tên sp</th>
            <th scope="col">giá tiền/1sp</th>
            <th scope="col">giảm giá/1sp</th>
            <th scope="col">số lượng</th>
            <th scope="col">thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((item) => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>
                <AiFillMinusCircle
                  onClick={() => {
                    dispatch(removeProductFromCart(item));
                  }}
                />
                <b style={{ "margin-left": "20px", "margin-right": "20px" }}>
                  {item.amount}
                </b>
                <AiFillPlusCircle
                  onClick={() => {
                    dispatch(addProductToCart(item));
                  }}
                />
              </td>
              <td>{item.amount * (item.price - item.discount)}</td>
            </tr>
          ))}
          <tr>
            <td colspan="2">
              <b>Tổng tiền</b>
            </td>
            <td colspan="3">
              {listProduct.reduce(
                (total, cur) => total + cur.amount * (cur.price - cur.discount),
                0
              )}{" "}
              đồng
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <b>Địa chỉ nhận hàng</b>
            </td>
            <td colspan="3">
              <input type="text" onChange={(e) => setAddress((e.target.value).trim())}></input>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              {!address.length ? <label>vui lòng điền địa chỉ nhận hàng</label> : <></>}
            </td>
          </tr>
          {listProduct.length ? (
            <tr>
              <td colspan="5">
                <Button variant="primary" onClick={handleMakeOrder}>
                  Đặt hàng
                </Button>
              </td>
            </tr>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
