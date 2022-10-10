const express = require('express');
const router = express.Router();
const db = require ('../db/questions.js');
router.get('/data',(req,res) => {
    const str = db.getCollection('questions').data;
    res.send(str);
});

router.get('/results',(req,res) => {
    const str = db.getCollection('results').data;
    res.send(str);
});
router.get('/results/:grade',(req,res) => {
    const grade = parseInt((req.params.grade).substring(1));
    const coll = db.getCollection('results');
    const colllength = coll.data.length;
    const unit =  100/colllength;
    const index = Math.ceil(grade/unit);
    const results = coll.findOne({'id': index});
    res.send(results);
});

router.post('/result', (req, res) => {
    res.end('n/a')
});


module.exports = router;