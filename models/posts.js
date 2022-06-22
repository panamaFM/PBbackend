const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    reference : {
        type: String,
        required: true
    },
    added : {
        type: String,
        default: Date.Now
    }
});

module.exports = mongoose.model('', PostSchema, 'myGameThreads')