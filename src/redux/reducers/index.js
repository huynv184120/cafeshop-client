import { combineReducers } from "redux";
import {productReducer} from "./product";
import {orderReducer} from "./order";
import { userReducer } from "./user";
const rootReducer = combineReducers({
    product: productReducer,
    order: orderReducer,
    user: userReducer,
});

export default rootReducer;