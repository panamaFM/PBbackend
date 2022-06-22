const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    try
    {
        res.send('hi');
        console.log('hi');
    }
    catch(err)
    {
        res.json(err);
        console.log(err);
    }
});

module.exports = router;