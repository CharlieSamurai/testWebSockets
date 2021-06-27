import { useContext, createContext } from "react";
import { useDispatch } from "react-redux";
import getMessageList from '../Redux/reduxThunks/getMessageList';

const webSocketContext = createContext();

const WebSocketContextComponent = ({ children }) => {

  const dispatch = useDispatch();

  dispatch(getMessageList());

  const createWebSocket = () => {
    const socket = new WebSocket('ws://localhost:3001/webSocket');

    socket.onopen = (e) => {
      console.log('[open] Соединение установлено.');
    };

    socket.onmessage = (event) => {
      dispatch({ type: 'ADD_MESSAGE', payload: JSON.parse(event.data) })
    };

    socket.onclose = (event) => {
      event.wasClean ? console.log('[close] Соединение закрыто.') : console.log('[close] Соединение сломалось.');
    };

    socket.onerror = (err) => {
      console.log(`[error] ${err.message}`);
    };

    return socket;
  };

  const socket = createWebSocket();

  return (
    <webSocketContext.Provider value={{ socket }}>
      {children}
    </webSocketContext.Provider>
  );
};

export default WebSocketContextComponent;

const useWebSocketContext = () => useContext(webSocketContext)

export {
  useWebSocketContext
};