import { userAction } from "../actions/user";

const initState = {isSignin:false, userInfo: {}}

export const userReducer = (state=initState, action) => {
    switch (action.type) {
    case userAction.updateUserInfo:
        return {
            ...state,
            userInfo: action.data,
        }
    default: return state;
}
}