import { ADD_MESSAGE, SET_USER, GET_MESSAGE_LIST } from '../actionTypes/actionTypes';

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };

    case GET_MESSAGE_LIST:
      return {
        ...state,
        messageList: action.payload
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messageList: [...state.messageList, action.payload]
      }

    default:
      return state;
  }
};

export default Reducer;