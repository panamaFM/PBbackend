const express = require('express');
const router = express.Router();
const gameInfo = require('../models/game');

router.get('/allGames', async (req, res)=>{
    try {
        const allGames = await gameInfo.find();
        res.json(allGames);
    } catch (error) {
        res.json(error);
    }
});

router.get('/:gameID', async (req, res)=>{
    try {
        const game = await gameInfo.findOne({ _id: req.params.gameID });
        //res.json(game);
        if(game == null){
            res.status(204).json("not exist");
        }else{
            res.status(200).json("exist");
        }
    } catch (err) {
        res.json(err);
        console.log(err);
    }
});

router.get('/:gameName', async (req, res)=>{
    try {
        const game = await gameInfo.findOne({ name: req.params.gameName });
        //res.json(game);
        if(game == null){
            res.status(204).json("not exist");
        }else{
            res.status(200).json("exist");
        }
    } catch (err) {
        res.json(err);
        console.log(err);
    }
});

module.exports = router;