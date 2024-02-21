const express = require("express")

var router = express.Router()

router.get('/',function(req,res){
    res.send('Get Router on things')
})

router.post('/',function(req,res){
    res.send('Post Router on things')
})





module.exports=router