var userModel = require('./../models/userModel.js');

  module.exports = {
    getMe: function(req,res) {
      if(!req.user){
        return res.send();
      }
      userModel
      .findById(req.user._id)
      .exec(function (err, result) {
        if (err) {
          return res.send(err);
        }
        res.send(result);
      });
    },
    logout: function(req,res) {
      req.logout();
      console.log(req + " has been logged out");
      res.send();
    }
  };
