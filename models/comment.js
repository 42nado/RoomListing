const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
// require('mongoose-type-url');

const commentSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    comment: {
        type: String,
    }

})


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;