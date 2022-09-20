
실행
```
cd simple-quiz-app
npm start
```
폴더 구조
```
src  
 ┣ apis  
 ┃ ┗ .gitkeep  
 ┣ components  
 ┃ ┣ Answer.tsx  
 ┃ ┣ Container.tsx  
 ┃ ┣ Modal.tsx  
 ┃ ┗ Title.tsx  
 ┣ hooks  
 ┃ ┗ useModal.tsx  
 ┣ pages  
 ┃ ┣ home  
 ┃ ┃ ┣ Home.tsx  
 ┃ ┃ ┗ useHome.tsx  
 ┃ ┣ quiz  
 ┃ ┃ ┣ Quiz.tsx  
 ┃ ┃ ┗ useQuiz.tsx  
 ┃ ┗ result  
 ┃ ┃ ┣ Result.tsx  
 ┃ ┃ ┗ useResult.tsx  
 ┣ tests  
 ┃ ┣ Home.test.tsx  
 ┃ ┣ Quiz.test.tsx  
 ┃ ┗ Result.test.tsx  
 ┣ types  
 ┃ ┗ quiz.ts  
 ┣ utils  
 ┃ ┗ Portal.ts  
 ┣ App.tsx  
 ┣ index.tsx  
 ┣ react-app-env.d.ts  
 ┣ reportWebVitals.ts  
 ┗ setupTests.ts
 ```
 
### 요구사항
----
**[필수 구현]**

-   [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
-   [x] 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
-   [x] 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
-   [x] 답안 선택 후 다음 문항 버튼을 볼 수 있다.
    -   [x] 답안이 맞았는지 틀렸는지 바로 알 수 있다.
    -   [x] 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
-   [x] 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
	-   [x] 퀴즈를 마칠 때까지 소요된 시간
    -   [x] 정답 개수
    -   [x] 오답 수
