module.exports = function(app, blogpostcollection) {

    const express = require("express");
    const viewblogbyid = express.Router();

    viewblogbyid.use(function(req, res, next) {

        console.log(req.query.id);
        blogpostcollection.find({
            "postid": req.query.id
        }, function(err, result) {

            if (err) {
                res.send("Error")
            }
            else {
                res.send(result);
            }

        })

    });

    app.use('/api/viewblogbyid', viewblogbyid);

}