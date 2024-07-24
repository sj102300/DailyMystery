
## 💡 생성형 AI를 활용해 만드는 매일매일 새로운 추리 게임

해당 링크를 통해 플레이해보세요 !!
[DM: Daily Mystery](https://dailymystery.netlify.app/)

### 👫 팀 소개

---

프론트: 이승주 / 류지승

백엔드: 이광훈

AI: 정한이


### 📜 프로젝트 소개

---

[![Video Label](http://img.youtube.com/vi/hf4fHv8SU2k/0.jpg)](https://youtu.be/hf4fHv8SU2k)

- 개발 동기 및 서비스 기획
    
    <ins>“기존 추리 게임의 문제점을 생성형 AI를 통해 해결하자”</ins>
    
    하나의 문제 개발에 많은 시간과 비용 소모 ⇒ 생성형 AI의 창의력을 활용해 해결
    
    정해진 선택지 내에서 선택해서 문제를 풀이 (자유도가 낮음) ⇒ 용의자를 자유롭게 심문할 기회 제공
    
    한번 플레이한 게임은 더 이상 플레이 하지 않음 ⇒ 생성형 AI를 이용해 매일 새로운 문제 제공
    
- 기능 명세
    1. 게임 시작 및 사건 배경 설명
    2. 추리 메인 페이지에서 용의자 및 증거 물품 정보를 확인
    3. 의심가는 용의자에게 10번의 심문 기회 제공 (챗봇 형식)
    4. 범인 선택
    5. 사건의 전말 및 범인 확인
    6. 하루에 한번만 풀이 가능, 다음 날 자정이 되면 새로운 문제로 다시 플레이

### 💻 사용 기술 및 개발 과정

---

<img width="600" alt="개발 파이프라인" src="https://github.com/user-attachments/assets/1babbd15-38b0-446d-9645-62eac81df2e9">

매일 자정에 GPT-4o & Dalle3 API로 문제에 필요한 리소스 생성 → DB에 저장

React.ts로 클라이언트 구축 / Springboot + MySQL로 서버 구축

GPT 응답 stream 형태로 전달 → 실시간으로 소통하는 챗봇 구현

### 🍀 주요 역할 및 업무 내용

---

- 사건 배경 및 엔딩 페이지 애니메이션 구현
    
    Js 없이 CSS만을 이용한 애니메이션 구현으로 성능 최적화
    
- 용의자와 심문하는 챗봇 구현
    
    Client에서 용의자 정보와 질문을 body에 담아 서버에 post 요청
    
    → openAI API에 문제 정보를 context로 주고 용의자의 답변을 생성
    
    → SSE 형태로 Client에 넘겨주어 실시간으로 소통 
    
- netlify를 이용해 배포
    
    proxy를 이용해 https → http 통신을 가능하게함
    

### 🔗 시연 영상 링크

---

https://www.youtube.com/watch?v=hf4fHv8SU2k

### ‼️ 배운점 및 느낀점

---

- CSS만으로 애니메이션을 만드는게 생각보다 까다롭다..
