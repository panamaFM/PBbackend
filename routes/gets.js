const express = require('express');
const router = express.Router();
const gameInfo = require('../models/game');
const gameResultInfo = require('../models/gameResult');

router.get('/allGames', async (req, res)=>{
    try {
        const allGames = await gameInfo.find();
        res.status(200).json(allGames);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:gameID', async (req, res)=>{
    try {
        const game = await gameInfo.findOne({ _id: req.params.gameID });
        //res.json(game);
        if(game == null){
            res.status(204).json("not exist");
        }else{
            res.status(200).json(game);
        }
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

router.get('/name/:gameName', async (req, res)=>{
    try {
        const game = await gameInfo.findOne({ name: req.params.gameName });
        //res.json(game);
        if(game == null){
            res.status(204).json("not exist");
        }else{
            res.status(200).json(game);
        }
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

router.get('/result/:gameID', async (req, res)=>{
    try {
        const gameResult = await gameResultInfo.find({ gameid: req.params.gameID });
        //res.json(game);
        if(gameResult == null){
            res.status(204).json("not exist");
        }else{
            res.status(200).json(gameResult);
        }
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

module.exports = router;