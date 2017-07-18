module.exports = function(app, blogpostcollection) {

    const express = require("express");
    const deleteblog = express.Router();

    deleteblog.use(function(req, res, next) {

        blogpostcollection.remove({
            postid: req.query.id
        }, function(err, result) {
            if (err) {
                console.log("Error In Delete")
                res.status(200).send("Error In Delete")
            }
            if (result) {
                res.status(200).send("Deleted");
            }
        })
    })

    app.use('/api/deletebyid', deleteblog);
}