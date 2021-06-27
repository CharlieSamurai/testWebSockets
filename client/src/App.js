import MainPage from './components/MainPage/MainPage';
import WebSocketContext from './contexts/WebSocketContext';

function App() {
  return (
    <WebSocketContext>
      <MainPage />
    </WebSocketContext>
  );
}

export default App;
