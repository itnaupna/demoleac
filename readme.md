목적 : 간단한 스프링부트+리액트 소켓 채팅사이트

준비
 - VSCode
   - Extension Pack for Java @Microsoft
   - Gradle for Java @Microsoft
   - Spring Boot Extension Pack @VMware
   - Reactjs code snippets @charalampos karypidis
 - Jdk 17
 - NodeJS

1. 서버용 스프링부트 프로젝트 생성
 - VSCode에서 [Ctrl]+[Shift]+[P] 
 - Java : Create Java Project...
 - Spring Boot -> Gradle -> 3.1.0 -> Java -> com.example -> demo -> Jar -> 17
 - Spring Boot DevTools, Lombok, WebSocket

2. 클라용 리액트 프로젝트 생성
 - VSCode 터미널
 - npx create-react-app front

3. 스프링부트 - 리액트 간단한 연동테스트
 - front/package.json 편집
   - 적당한곳에 프록시 설정 추가 
   - "proxy":"http://localhost:8080"
   - 추가안할시 CORS 오류 발생 (출처가 다른 스크립트 실행을 막는 브라우저단 보안)
 - src/main/java/com 하위에 패키지 추가(폴더 추가)
   - controller
     - TestController.java 추가
     - @RestController 어노테이션 등록
     - @GetMapping("/test") 메서드 추가
       - 적당히 스트링 반환하는값으로.
 - front/src/App.js 수정
   - fetch 를 이용해 스프링과 통신
   - msg useState()
   - useEffect(()=>{fetch("/test").then(r=>r.json()).then(r=>setMsg(r));},[]);
   - TestController에서 추가한 메서드가 반환하는 값이 표시되는지 확인

4. 클라이언트 디자인
 - Pages 폴더 생성
   - Lobby, Room 생성
   - 적당히 추가
   - 페이지 전환을 위해 router 패키지 추가 (npm i react-router-dom)

5. 서버 개발(1)
 - msgDto, roomDto 생성
 - wsConfig 생성
 - roomService 생성
 - lobbyController 생성
   - /lobby/list 방목록
   - /lobby/create (str` name) 방생성
 - roomController 생성
   - /room/info/{id} 방 정보 받아오기
 - msgController 생성

6. 클라 개발 - 로비
 - 방 생성
 - 방 목록
 - Link to 로 방 입장

7. 클라 개발 - 방
 - /room/info/{id} 로 방제목 받아오기
 - 소켓연결
   - npm i @stomp/stompjs
   - npm i sockjs-client
   - fetch로 방 제목 받아오고
   - 방제목 받아오는데 성공하면 소켓연결
   - 즐겁다
