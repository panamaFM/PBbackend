const express = require('express');
const router = express.Router();
const gameInfo = require('../models/game');
const gameResultInfo = require('../models/gameResult');

router.post('/newGame', async (req, res) => {
    const newGame = new gameInfo({
        name : req.body.name,
        reference : req.body.reference,
        timestart: req.body.timestart,
        timeend: req.body.timeend,
        interval: req.body.interval,
        status: req.body.status,
        added: req.body.added,
        edited: req.body.edited
    });

    try{
        const savedNewGame = await newGame.save();
        res.status(200).json("success");
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

router.post('/newGameResult', async (req, res) => {
    const newGameResult = new gameResultInfo({
        gamename : req.body.gamename,
        gamereference : req.body.gamereference,
        gameinterval : req.body.gameinterval,
        rotation : req.body.rotation,
        gameDateTime : req.body.gameDateTime,
        round : req.body.round,
        list : req.body.list,
        firstNum : req.body.firstNum,
        powerBall : req.body.powerBall,
        sum : req.body.sum,
        size : req.body.size,
        PWBPOE : req.body.PWBPOE,
        PWBPUO : req.body.PWBPUO,
        PWBPOEUO : req.body.PWBPOEUO,
        PWBNOE : req.body.PWBNOE,
        PWBNUO : req.body.PWBNUO,
        PWBNOEUO : req.body.PWBNOEUO,
        PWBPOENOE : req.body.PWBPOENOE,
        PWBBMS : req.body.PWBBMS,
        PWBOEBMS : req.body.PWBOEBMS,
        PWBPS : req.body.PWBPS,
        PWBNS : req.body.PWBNS,
        PLDLR : req.body.PLDLR,
        PLDTF : req.body.PLDTF,
        PLDOE : req.body.PLDOE,
        PLDLRTF : req.body.PLDLRTF,
        gameid : req.body.gameid,
        getDateTime : req.body.getDateTime,
        regDateTime : req.body.regDateTime,
        from : req.body.from
    });

    try{
        const savedNewGame = await newGameResult.save();
        res.status(200).json("success");
    }
    catch(err){
        res.status(400).json(err);
        console.log(err);
    }
});

module.exports = router;