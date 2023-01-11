const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Assignment 10 is  Running ')
})

app.listen(port,()=>{
    console.log('Server is running in port 5000');
})