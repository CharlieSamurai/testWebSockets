const { Router } = require('express');
const router = Router();
const ws = require('ws');
const onSocketConnect = require('./onSocketConnect/onSocketConnect');

const wss = new ws.Server({ noServer: true });

router.route('/')
  .get((req, res) => {
    try {
      if (req.headers?.upgrade === 'websocket') {
        wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
      };
    }
    catch (e) {
      console.log(e);
    };
  });

module.exports = router;