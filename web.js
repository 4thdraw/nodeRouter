const express = require("express");
const path = require("path");

const  normalrouter = require("./subrouter");

const nodeserver = express(); // 1
const port = process.env.PORT || 8001; //1

//정적주소세팅하기
//  html 폴더를 /로 대입하겠다.
nodeserver.use(express.static(path.join(__dirname,'html'))); //2
//__dirname : 현재폴더 __filename ://서버에서 쓰는 파일경로포함된 이름

nodeserver.get("/",(req, res)=>{ 
    res.sendFile(path.join(__dirname,'html/index.html')); 
    // 응답으로 파일 보내줄게 // path -> 주소 조립, 분해
})
nodeserver.use("/way", normalrouter );
nodeserver.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,'html/nopage.html'));
})
   // 응답상태 404  정상 200 
nodeserver.listen(port, ()=>{ // 3
    console.log(`서버구동됨 ${path.join(__dirname,'html')}`)
})