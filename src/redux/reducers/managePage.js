import { managePageAction } from "../actions/managePage";

const initState = { activeTab: 0 };
export const managePageReducer = (state = initState, action) => {
    switch (action.type) {
        case managePageAction.activeTab:
            state.activeTab = action.data;
            return { ...state };
        default: return state;
    }
}
