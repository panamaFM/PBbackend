const mongoose = require('mongoose');

const gameResultSchema = mongoose.Schema({
    gamename : {
        type: String,
        required: true
    },
    gamereference : {
        type: String,
        required: true
    },
    gameinterval : {
        type: Number,
        required: true
    },
    rotation : {
        type: Number,
        required: true
    },
    gameDateTime : {
        type: Date,
        required: true
    },
    round : {
        type: String,
        required: true
    },
    list : {
        type: String,
        required: true
    },
    firstNum : {
        type: Number,
        required: true
    },
    powerBall : {
        type: Number,
        required: true
    },
    sum : {
        type: Number,
        required: true
    },
    size : {
        type: String,
        required: true
    },
    PWBPOE : {
        type: String,
        required: true
    },
    PWBPUO : {
        type: String,
        required: true
    },
    PWBPOEUO : {
        type: String,
        required: true
    },
    PWBNOE : {
        type: String,
        required: true
    },
    PWBNUO : {
        type: String,
        required: true
    },
    PWBNOEUO : {
        type: String,
        required: true
    },
    PWBPOENOE : {
        type: String,
        required: true
    },
    PWBBMS : {
        type: String,
        required: true
    },
    PWBOEBMS : {
        type: String,
        required: true
    },
    PWBPS : {
        type: String,
        required: true
    },
    PWBNS : {
        type: String,
        required: true
    },
    PLDLR : {
        type: String,
        required: true
    },
    PLDTF : {
        type: String,
        required: true
    },
    PLDOE : {
        type: String,
        required: true
    },
    PLDLRTF : {
        type: String,
        required: true
    },
    gameid : {
        type: String,
        required: true
    },
    getDateTime : {
        type: Date,
        required: true
    },
    regDateTime : {
        type: Date,
        required: true
    },
    from : {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = mongoose.model('gameResultSchema', gameResultSchema, 'myGameResults')