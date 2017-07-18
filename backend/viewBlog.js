module.exports = function(app, blogpostcollection) {


    const express = require("express");
    const viewblog = express.Router();

    viewblog.use(function(req, res, next) {

        blogpostcollection.find({}, function(err, result) {
            //console.log(result);
            res.send(result);
        })

    });

    app.use('/api/viewblog', viewblog);
}