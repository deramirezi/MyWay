const mongoose = require('mongoose');

//Schema DATABASE
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    username: String,
    placeName: String,
    placelat: Number,
    placelng: Number,
    placeDuration: Number,
    PlacePosition: Number,
});

//Model

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;


