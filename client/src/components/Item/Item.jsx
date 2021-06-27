const Item = ({ message }) => {
  return (
    <div>
      <p>{message.author}</p>
      <p>{message.text}</p>
    </div>
  );
};

export default Item;