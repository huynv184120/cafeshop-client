import { combineReducers } from "redux";
import {productReducer} from "./product";
import {orderReducer} from "./order"
const rootReducer = combineReducers({
    product: productReducer,
    order: orderReducer,
});

export default rootReducer;