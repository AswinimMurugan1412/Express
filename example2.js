var express =require('express');
var app =express();

app.use('/Things',function(req,res,next){
    console.log("A request for things received at" + Date.now());
    next();
});

app.get('/Things',function(req,res){
    res.send('Things');
});

app.listen(3000);

