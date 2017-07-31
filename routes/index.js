var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("OK");
});

router.post('/', function(req, res, next){
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
