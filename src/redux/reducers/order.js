import { orderAction } from "../actions/order";

const initState = { listOrder: [], numberOrder: 0 };

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case orderAction.updateOrder: {
            action.data.forEach(order => {
                const index = state.listOrder.findIndex(item => item.id == order.id);
                if (index !== -1) {
                    state.listOrder[index] = order;
                } else {
                    state.listOrder.push(order);
                }
            })
            return { ...state };
        }
        case orderAction.updateNumberOrder: {
            state.numberOrder = action.data;
            return { ...state };
        }
        default: return state;
    }
}