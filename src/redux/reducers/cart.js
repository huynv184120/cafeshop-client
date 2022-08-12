import { cartAction } from "../actions/cart";

const initSate = { listProduct: [], numberProduct: 0 };

export const cartReducer = (state = initSate, action) => {
    const index = state.listProduct.findIndex(item => item.id === state.data.id);
    switch (action.type) {
        case cartAction.addProductToCart:
            if (index == -1) {
                state.listProduct.push({ id: state.data.id, amount: 1 , name: action.date.name, imgUrl: action.data.imgUrl})
            } else {
                state.listProduct[index].amount += 1;
            }
            state.numberProduct += 1;
            return { ...state };
        case cartAction.removeProductFromCart:
            if (index == -1) {
            } else {
                if (state.listProduct[index].amount > 0)
                    state.listProduct[index].amount -= 1;
                state.numberProduct -= 1;
            }
            return { ...state };
        case cartAction.resetCart:
            return { ...initSate };
        case cartAction.deleteProductFromCart:
            if (index >= 0) {
                state.numberProduct -= state.listProduct[index].amount;
                state.listProduct = state.listProduct.filter(item => item.id != state.data.id);
            }
            return { ...state };
        default: return state;
    }
}