var express = require('express');
var router = express.Router();
var configs = require('./configs.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, "OK");
});

router.post('/', function(req, res, next){
    var serverToken = req.header("X-Gitlab-Token");
    var gitEvent = req.header("x-gitlab-event");
    var userEmail = req.body.user_email;
  
    console.log(configs.secretToken);
    console.log(serverToken, gitEvent, userEmail);
    // if(serverToken != configs.secretToken)
  
    // console.log("---headers: ", req.headers);
    // console.log("---specific header: ", req.header("X-Gitlab-Token"));
    // console.log("---query: ", req.query);
    // console.log("---body: ", req.body);
    res.send(200, "Ok");
});

module.exports = router;
