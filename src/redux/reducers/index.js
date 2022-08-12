import { combineReducers } from "redux";
import { productReducer } from "./product";
import { orderReducer } from "./order";
import { userReducer } from "./user";
import { chatUserReducer } from "./chatUser";
import { managePageReducer } from "./managePage";
import { cartReducer } from "./cart";
const rootReducer = combineReducers({
    product: productReducer,
    order: orderReducer,
    user: userReducer,
    chatUser: chatUserReducer,
    managePage: managePageReducer,
    cart: cartReducer,
});

export default rootReducer;