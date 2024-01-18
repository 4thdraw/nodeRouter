const express = require('express');
const normalrouter = express.Router(); // 엔트리포인트를 제외한 모든 일반 라우터들 실행
normalrouter.get("/", (req, res)=>{ // 도메인/way 주소창에 치면 실행되어 응답
    res.send("나는 누구일까요?")
})
normalrouter.get("/aaa", (req, res)=>{ // 도메인/way/aaa  주소창에 치면 실행되어 응답
    res.send("나는 aaa 누구일까요?")
})

module.exports = normalrouter;