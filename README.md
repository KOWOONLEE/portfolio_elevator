# **프로젝트 소개 - react로 반응형 portfolio 사이트 만들기**

## 배포 주소

### 📒 https://kowoonlee.github.io/portfolio_elevator/

<br>
<br>

## 프로젝트 설명

React 를 사용해 포트폴리오 사이트를 제작했습니다.
elevator UI를 구현하여 층마다 포트폴리오 내역을 확인하는 것처럼 구현했습니다.
Portfolio 항목의 프로젝트 카드를 클릭하면 프로젝트 상세 내역 페이지로 이동합니다.
<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> styled-components

> react-dom

> react-router-dom

> redux-tookit

> react-icons

> react-slick

> react-player

<br>
<br>

## 프로젝트 설치 및 실행 방법

1. Node.js를 설치해주세요.

```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.

```
https://github.com/KOWOONLEE/portfolio_elevator.git
```

3. dependencies를 설치해주세요.

```
npm install
```

4. 명령어를 통해 server를 실행해주세요.

```
npm run start
```

<br>
<br>

## 기능 및 메뉴 소개

<br>
<br>

### ✅ 메인화면

포트폴리오의 메인화면은 저를 소개하는 About, 사용해본 Skills, 이력 및 교육에 관련된 Resume, 프로젝트 경험과 관련된 Portfolio 페이지로 나뉘어 있습니다.
elevator UI를 참고하여 메인페이지를 꾸며보았습니다. 엘리베이터 위에 화면에서 현재페이지가 보입니다.
![1  메인화면_수정](https://user-images.githubusercontent.com/108816777/230767962-ac66357d-54e7-44a8-a468-68ab184a80f7.gif)

<br>
<br>

### ✅ 상세 포트폴리오 페이지

Portfolio카테고리에서 프로젝트 카드 클릭 시 해당 프로젝트 상세 페이지로 이동합니다.
상세 포폴 사이트는 슬라이드로 이미지 삽입 후 각 메뉴에 대한 설명이 기재되어있으며, 오른쪽에 프로젝트 기간, 인원, 역할, github-repo, 회고록 등 자세한 내용이 기재되어있습니다.
발표 동영상이 있는 경우에는 react-player이용하여 동영상을 삽입했습니다.
해당 페이지 navbar에서 first, second 등은 프로젝트 번호이며, 해당 메뉴에 hover시 프로젝트 이름이 나오도록 했습니다.
![포트폴리오_수정](https://user-images.githubusercontent.com/108816777/230768076-f18ff59f-2307-402a-8ba9-7f41302e0176.gif)

<br>
<br>

## 반응형 추가

태블릿 가로 사이즈 768px 기준으로 해당 사이즈 이하로 줄어들 경우에 페이지 레이아웃이나 글씨 크기가 변경되도록 반응형으로 구현하였습니다.
반응형 사이즈일 때 navbar를 아이콘 toggle로 변경하여 재배치하도록 했습니다.
![메인 반응형 수정](https://user-images.githubusercontent.com/108816777/230768463-8ad7193b-b649-491c-bb7e-e1bb5977e962.gif)

![프로젝트 nav 반응형 수정](https://user-images.githubusercontent.com/108816777/230768363-a639210f-2b47-4c58-8fa5-3375a50327d6.gif)
<br>
<br>

## 작성자 깃허브 및 블로그 계정

- 깃허브 https://github.com/KOWOONLEE
- 블로그 https://velog.io/@kkk5689
