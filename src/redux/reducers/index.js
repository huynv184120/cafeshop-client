import { combineReducers } from "redux";
import {productReducer} from "./product";
import {orderReducer} from "./order";
import { userReducer } from "./user";
import {chatUserReducer} from "./chatUser";
const rootReducer = combineReducers({
    product: productReducer,
    order: orderReducer,
    user: userReducer,
    chatUser: chatUserReducer,
});

export default rootReducer;