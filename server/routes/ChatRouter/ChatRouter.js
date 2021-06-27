const { Router } = require('express');
const router = Router();
const pseudoDb = require('./pseudoDb/pseudoDb');

router.route('/')
  .get((req, res) => {
    try {
      res.json(pseudoDb);
    }
    catch (e) {
      console.log(e);
    };
  });

module.exports = router;