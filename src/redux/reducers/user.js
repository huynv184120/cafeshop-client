import { userAction } from "../actions/user";

const initState = { userInfo: {} }

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case userAction.updateUserInfo:
            if (JSON.stringify(state.userInfo) == JSON.stringify(action.data)) return state;
            return {
                ...state,
                userInfo: action.data,
            }
        default: return state;
    }
}