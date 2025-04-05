require("dotenv").config()

const express = require("express");
const app = express();
const port = 3000

app.listen(process.env.port, ()=>{
    console.log(`hello world ${port} `);
})

app.get("/" , (req,res)=>{
    res.send("hello this is the defaulft page");
})