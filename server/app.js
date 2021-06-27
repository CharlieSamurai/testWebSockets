const express = require('express');
const app = express();
const cors = require('cors');
const webSocketRouter = require('./routes/webSocketRouter/webSocketRouter');
const chatRouter = require('./routes/ChatRouter/ChatRouter');

const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/webSocket', webSocketRouter);
app.use('/chat', chatRouter);


app.listen(port, () => {
  console.log(`Server: OK\nPort: ${port}`);
});