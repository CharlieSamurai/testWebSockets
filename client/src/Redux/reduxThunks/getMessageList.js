import { GET_MESSAGE_LIST } from '../actionTypes/actionTypes';

const getMessageListAction = (payload) => {
  return {
    type: GET_MESSAGE_LIST,
    payload: payload
  };
};

const getMessageListThunk = () => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/chat`);
    if (response.status === 200) {
      dispatch(getMessageListAction(await response.json()));
    };
  }
  catch (e) {
    console.log(e);
  };
};

export default getMessageListThunk;