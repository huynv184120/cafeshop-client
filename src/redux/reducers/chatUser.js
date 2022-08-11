import { chatUserAction } from "../actions/chatUser";
const initState = { showFrame: false, listMessage:[] };

export const chatUserReducer = (state = initState, action) => {
  switch (action.type) {
    case chatUserAction.showFrame:{
      state.showFrame = !state.showFrame;
      return {...state};
    }
    default:
      return state;
  }
};