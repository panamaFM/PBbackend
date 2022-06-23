const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    reference : {
        type: String,
        required: true
    },
    timestart: {
    type: Date,
    required: true
    },
    timeend: {
    type: Date,
    required: true
    },
    interval: {
    type: Number,
    required: true
    } ,
    status: {
    type: Number,
    required: true
    },
    added: {
    type: Date,
    default: Date.now 
    },
    edited: {
    type: Date,
    default: Date.now 
    }
}, { versionKey: false });

module.exports = mongoose.model('gameSchema', gameSchema, 'myGameThreads')