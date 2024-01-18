const express = require("express");
const path = require("path"); //모듈가져오기

const  normalrouter = require("./subrouter"); // 소스가져오기

const nodeserver = express(); // 서버구동하기 -> 엔트리포인트만의 실행 
const port = process.env.PORT || 8001; //1  -> 시스템의 설정된 포트를 1순위 2순위는 8001포트번호

//  정적주소세팅하기
//  html 폴더를 /로 대입하겠다.
//  화면에 노출하는 파일들은 도메인을 쳐서 나온다
//  도메인 == html폴더   -> 닷홈처럼 루트디렉토리를 html폴더로 세팅함
//  /img/logo.jpg 와 같이 루트디렉토리 주소로 프로그래밍할 수있도록 세팅한 것임

nodeserver.use(express.static(path.join(__dirname,'html'))); 
// 도메인의 루트디렉토리세팅 -> 엔트리포인트만의 실행
//__dirname : 현재폴더 __filename ://서버에서 쓰는 파일경로포함된 이름

nodeserver.get("/",(req, res)=>{  // 도메인만 치면 나올 페이지세팅
    //여기서 주의 루트디렉토리안의 index.html이 관례처럼 연결
    res.sendFile(path.join(__dirname,'html/index.html')); 
    // 응답으로 파일 보내줄게 // path -> 주소 조립, 분해
})
nodeserver.use("/way", normalrouter );
// 도메인/way 라우터를 치면  subrouter.js 실행됨

//반드시 페이지 찾을 수없다의  아래의 코드는 제일 아래에 둘것
nodeserver.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname,'html/nopage.html'));
})
   // 응답상태 404  정상 200 
nodeserver.listen(port, ()=>{ // 3
    console.log(`서버구동됨 ${path.join(__dirname,'html')}`)
})