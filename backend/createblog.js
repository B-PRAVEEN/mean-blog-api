module.exports = function(app, blogpostcollection) {

  const express = require("express");
  const createblog = express.Router();

  createblog.use(function(req, res, next) {


    var createcollection = new blogpostcollection(req.body);

    //db Save command
    createcollection.save(function(err) {
      // console.log(err);
      if (!err) {

        console.log("Save");

        res.status(200).send("Blog Posted.");
      }
      else {
        res.status(200).send(err.message)
      }

    })

  });

  app.use('/api/create', createblog);
}
