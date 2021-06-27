import { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_USER } from '../../Redux/actionTypes/actionTypes';

const SetNickname = () => {

  const dispatch = useDispatch();
  const [nicknameInput, setNicknameInput] = useState('');

  const clickHandler = () => {
    dispatch({
      type: SET_USER,
      payload: nicknameInput
    });
  };

  return (
    <>
      <input value={nicknameInput} onChange={(e) => setNicknameInput(e.target.value)} placeholder='set nickname'></input>
      <button onClick={clickHandler}>join chat</button>
    </>
  )
};

export default SetNickname;