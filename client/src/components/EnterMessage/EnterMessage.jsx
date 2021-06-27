import { useState } from "react";
import { useSelector } from "react-redux";
import { useWebSocketContext } from "../../contexts/WebSocketContext";


const EnterMessage = () => {

  const currentUser = useSelector(state => state.user);
  const { socket } = useWebSocketContext();
  const [inputValue, setInputValue] = useState('');

  const clickHander = () => {
    socket.send(
      JSON.stringify({
        author: currentUser,
        text: inputValue
      })
    );
    setInputValue('');
  };

  return (
    <>
      <input placeholder='enter yout message here' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /><button onClick={clickHander}>send message</button>
    </>
  );
};

export default EnterMessage;