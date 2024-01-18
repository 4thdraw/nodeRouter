const express = require('express');
const normalrouter = express.Router();
normalrouter.get("/", (req, res)=>{
    res.send("나는 누구일까요?")
})
normalrouter.get("/aaa", (req, res)=>{
    res.send("나는 aaa 누구일까요?")
})

module.exports = normalrouter;