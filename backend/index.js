const express= require('express');
const app= express();

app.get("/api", (req,res)=>{
    res.json("asdasdasdasd")
})

app.post("/status", )

app.listen(5000, ()=>{console.log("Server started.")});