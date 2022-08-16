import { cartAction } from "../actions/cart";

const initSate = { listProduct: [], numberProduct: 0 };

export const cartReducer = (state = initSate, action) => {
  switch (action.type) {
    case cartAction.addProductToCart: {
      const index = state.listProduct.findIndex(
        (item) => item.id === action.data.id
      );
      if (index == -1) {
        state.listProduct = [
          ...state.listProduct,
          {
            id: action.data.id,
            amount: 1,
            name: action.data.name,
            discount: action.data.discount,
            price: action.data.price,
          },
        ];
      } else if (state.listProduct[index].amount < 50) {
        state.listProduct[index].amount += 1;
        state.listProduct = [...state.listProduct];
        state.numberProduct += 1;
      }
      return { ...state };
    }
    case cartAction.removeProductFromCart: {
      const index = state.listProduct.findIndex(
        (item) => item.id === action.data.id
      );
      if (index == -1) {
      } else if (state.listProduct[index].amount > 1) {
        state.listProduct[index].amount -= 1;
        state.numberProduct -= 1;
        state.listProduct = [...state.listProduct];
      } else {
        state.listProduct = state.listProduct.filter(
          (item) => item.id != action.data.id
        );
      }
      return { ...state };
    }
    case cartAction.resetCart:
      return { ...initSate };
    case cartAction.deleteProductFromCart: {
      const index = state.listProduct.findIndex(
        (item) => item.id === action.data.id
      );
      if (index >= 0) {
        state.numberProduct -= state.listProduct[index].amount;
        state.listProduct = state.listProduct.filter(
          (item) => item.id != action.data.id
        );
      }
      return { ...state };
    }
    default:
      return state;
  }
};
