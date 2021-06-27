import { useSelector } from 'react-redux';
import ChatWindow from '../ChatWindow/ChatWindow';
import SetNickname from '../SetNickname/SetNickname';
import EnterMessage from '../EnterMessage/EnterMessage';

const MainPage = () => {

  const user = useSelector(state => state.user);

  return (
    <>
      <ChatWindow />

      {user
        ?
        <EnterMessage />
        :
        <SetNickname />}

    </>
  );
};

export default MainPage;