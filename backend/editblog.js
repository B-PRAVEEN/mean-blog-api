module.exports = function(app, blogpostcollection) {

    const express = require("express");
    const editblog = express.Router();

    editblog.use(function(req, res, next) {
        console.log(req.body)
        console.log(req.query.id);

        blogpostcollection.findOneAndUpdate({


            "postid": req.query.id
        }, req.body, {

            "upsert": false,
            "new": true
        }, function(err, result) {
            if (err) {
                res.send("Error in Edit")
            }
            else {
                res.send(result);
            }


        })
    });

    app.use('/api/editbyid', editblog);

}