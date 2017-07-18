 const mongoose = require('mongoose');
 var schema = mongoose.Schema;

 module.exports = {


  blogpost: function() {

   var blogpost = new schema({

    postid: {
     type: Number,
     index: {
      unique: true
     },
     required: true
    },
    title: {
     type: String,
     required: true
    },
    content: {
     type: String,
     required: true
    },
    author: {
     authorid: {
      type: Number,
      required: true
     },
     name: {
      type: String,
      required: true
     },
     bio: {
      type: String,
      required: true
     },
     sociallink: [],
    },
    createDate: {
     type: Date,
     default: Date.now
    },
    updateDate: {
     type: Date,
     default: Date.now
    },
    tag: [],
    url: {
     type: String,
     required: true
    },
    categoryid: []

   });
   return blogpost;
  }

 }