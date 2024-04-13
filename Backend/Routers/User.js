const express = require('express');
const router = express.Router();
const Model = require('../Models/User');

router.post('/add', (req,res) => {
    console.log(req.body);
    // Storing data to mongoDB
    new Model(req.body).save()
    .then(result => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });
})
 router.post('/authenticate',(req,res) => {
    Model.findOne(req.body)
    .then((reset)=> {
        if (result) res.json(result);
        else res.status(400).json({message: 'login failed'}); 
    }).catch((err)=>{
        console.log(err);
        res.status(200).json (err)
    });
})

router.post('/getall',(req,res) => {
    Model.find({})
    .then((reset)=> {
        res.json(result); 
    }).catch((err)=>{
        console.log(err);
        res.status(200).json (err)
    });
})


module.exports = router;