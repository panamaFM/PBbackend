const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const gameInfo = require('../models/game');

router.patch('/:gameID', async (req, res) => {
    try{
        const updatedGame = await gameInfo.updateOne(
            { _id: req.params.gameID },
            { $set: {   
                name: req.body.name, 
                reference: req.body.reference,
                timestart: req.body.timestart,
                timeend: req.body.timeend,
                interval: req.body.interval,
                status: req.body.status,
                added: req.body.added,
                edited: req.body.edited
            }}
            );
        res.send(updatedGame);
    }catch(err){
        res.send(err);
        console.log(err);
    }
});

module.exports = router;