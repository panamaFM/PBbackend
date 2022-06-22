const express = require('express');
const router = express.Router();
const ThreadInfo = require('../models/posts');

router.post('/newThread', async (req, res) => {
    const newThread = new ThreadInfo({
        name : req.body.name,
        reference : req.body.reference
    });

    try
    {
        const savedNewThread = await newThread.save()
        res.json(savedNewThread);
        console.log('success');
    }
    catch(err)
    {
        res.json(err);
        console.log(err);
    }
});

module.exports = router;