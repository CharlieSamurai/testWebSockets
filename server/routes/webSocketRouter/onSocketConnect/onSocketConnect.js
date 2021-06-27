const ws = require('ws');
const pseudoDb = require('../../ChatRouter/pseudoDb/pseudoDb');
const clients = new Set();

const onSocketConnect = (ws) => {

  clients.add(ws);

  ws.on('message', (message) => {
    JSON.parse(message);
    pseudoDb.push({
      author: message.author,
      text: message.text
    })
    for (let client of clients) {
      client.send(message);
    };
  });

  ws.on('close', (e) => {
    clients.delete(ws);
  });

};

module.exports = onSocketConnect;