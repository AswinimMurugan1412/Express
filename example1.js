var express = require('express');
var app=express();

app.get('/',function(req,res){
    res.send("This is Get URL")
})

app.get('/:id',function(req,res){
    res.send('The id you specified is'+req.params.id);
});

app.get('/Things/:name/:id',function(req,res){
    res.send('id: '+req.params.id +' and name: '+req.params.name);
});

app.get('/Things/:id([0-9]{5})',function(req,res){
    res.send('id: '+ req.params.id);
});

app.get('*',function(req,res){
    res.send('Sorry,this is an invalid URl.');
})
app.listen(3000);