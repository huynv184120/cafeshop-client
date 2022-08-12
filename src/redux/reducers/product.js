import { productAction } from "../actions/product";

const initState = { listProduct: [], numberProduct: 0 };

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productAction.updateProducts: {
            action.data.forEach(product => {
                const index = state.listProduct.findIndex(element => element.id == product.id);
                if (index !== -1) {
                    state.listProduct[index] = product;
                } else {
                    state.listProduct.push(product);
                }
            });
            state.listProduct = [...state.listProduct];
            return { ...state };
        }
        case productAction.updateNumberProduct: {
            state.numberProduct = action.data;
            return { ...state };
        }
        default: return state;
    }
}