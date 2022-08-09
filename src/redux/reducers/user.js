import { userAction } from "../actions/user";

const initState = {isSignin:false, userInfo: {}}

export const userReducer = (state=initState, action) => {
    switch (action.type) {
    case userAction.signin:
        return {
            ...state,
            isSignin: true,
        }
    case userAction.signout:
        return {
            ...state,
            isSignin: false,
        }
    case userAction.updateUserInfo:
        return {
            ...state,
            userInfo: action.data,
        }
    default: return state;
}
}