const express = require('express')
const app = express();

const middlewarefunction = async function (req,res,next) {
    const random =(min,max) => Math.floor(Math.random() * (max-min))+min;
    let isAuthendicated;
    await setTimeout(()=>{
     isAuthendicated = random(0,2);
    if (isAuthendicated) next();
else res.send('User is not authorized');
    },3000);
};

app.get('/' , middlewarefunction, ( req,res)=>{
    console.log (' inside the / route');
    res.send('Route hit');
});

app.get('/nomiddleware', ( req,res)=>{
    console.log (' inside the / no-middleware route');
    res.send('Route hit');
});

app.listen(3000,()=>{
    console.log('Server started')
});

