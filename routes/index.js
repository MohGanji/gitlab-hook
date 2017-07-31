var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, "OK");
});

router.post('/', function(req, res, next){
    console.log("---query: ", req.query);
    console.log("---body: ", req.body);
    res.send(200, "Ok");
});

module.exports = router;
