const express = require('express');
const router = express.Router();
const gameInfo = require('../models/game');

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

module.exports = router;