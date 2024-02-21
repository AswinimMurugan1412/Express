var express=require('express')
// var cookieParser=require('cookie-parser')
var session =require('express-session')

var app=express()

// app.use(cookieParser())   // express-session already depends on cookie-parser internally.
app.use(session({secret:"Shh,its a secret"
// ,resave: false,                                //To address the deprecation warnings for the resave and saveUninitialized options in express-session, you need to explicitly set these options. You can set them to false to use the default behavior.
//saveUninitialized: false
}))

app.get('/',function(req,res){
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page "+req.session.page_views+" times")
    }else{
        req.session.page_views=1
        res.send("Welcome to this page for the first time!")
    }
})

app.listen(3000)