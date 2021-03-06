var exec = require('child_process').exec;
var express = require('express');
var router = express.Router();
var configs = require('./../configs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, "OK");
});

router.post('/', function(req, res, next){
    var serverToken = req.header("X-Gitlab-Token");
    var gitEvent = req.header("x-gitlab-event");
    var userEmail = req.body.user_email;
  
    if(serverToken && serverToken != configs.secretToken){
      res.send(403, "unAuthorized token");
    }
    var cmd = configs.shellCommand;
    if(gitEvent == "Push Hook"){
      new Promise(function(fulfill, reject){
          var child = exec(cmd, function(error, stdout, stderr){
          console.log("stdout: ", stdout);
          console.log("stderr: ", stderr);
          console.log("error: ", error);
        });
        fulfill();
      }).then(res.send(200, "Ok"));
    }

    // res.send(200, "Ok");
});

module.exports = router;
