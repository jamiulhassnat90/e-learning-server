const express = require('express')
const courses= require("./data/courses.json")
const details= require("./data/details.json");
const cors = require("cors");
const app = express();
app.use(cors());

//route
app.get("/",(req,res)=>{
    res.send("hello world");
});

//get all courses
app.get("/courses",(req,res)=>{
    res.send(courses);
});

// get courses by id
app.get("/courses/:id",(req,res)=>{
    console.log(req);
    const courseId = req.params.id;
    const detailCourse = details?.filter((items)=>items.course_id=== courseId);
    res.send(detailCourse);
});


const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Assignment 10 is  Running ')
})

app.listen(port,()=>{
    console.log('Server is running in port 5000');
})