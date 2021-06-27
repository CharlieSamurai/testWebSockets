import { useSelector } from 'react-redux';
import styles from './ChatWindow.module.css';
import Item from '../Item/Item';

const ChatWindow = () => {

  const messageList = useSelector(state => state.messageList);

  return (
    <div className={styles.chat}>
      {messageList.map(el => <Item key={Date.now() + Math.random()} message={el} />)}
    </div>
  );
};

export default ChatWindow;