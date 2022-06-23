const express = require('express');
const router = express.Router();
const gameInfo = require('../models/game');

router.delete('/:gameID', async (req, res) => {
    try{
        const removedGame = await gameInfo.deleteOne({ _id: req.params.gameID });
        res.json(removedGame);
    }catch(err){
        res.send(err);
        console.log(err);
    }
});

module.exports = router;