var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendStatus(200);
});

router.post('/', function(req, res){
    console.log(req.body);
});

module.exports = router;
