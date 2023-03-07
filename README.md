# **프로젝트 소개 - react로 반응형 portfolio 사이트 만들기**

## 배포 주소
### 📒 https://kowoonlee.github.io/portfolio_elevator
<br>
<br>

## 프로젝트 설명

React 를 사용해 포트폴리오 사이트를 제작했습니다.
엘리베이터를 모티브로 버튼을 클릭할 때마다 해당 포폴 내용으로 이동합니다.
Portfolio페이지에서는 프로젝트 카드를 클릭하면 프로젝트 관련 detail페이지로 이동합니다.

<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> styled-components

> react-dom

> react-router-dom

> react-icons

> react-slick

> react-player

> reduxjs/toolkit


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

### ✅ 메인화면
엘리베이터 UI로 각 엘리베이터 층 버튼을 클릭할 때마다 해당 내용으로 이동할 수 있습니다.
포트폴리오의 내용은 저를 소개하는 About, 사용해본 Skills, 이력 및 교육에 관련된 Resume, 프로젝트 경험과 관련된 Portfolio 페이지, 이메일 주소와 github 주소가 나타난 Contact로 나뉘어 있습니다. 
CSS를 이용하여 배경화면은 별이 움직이는 우주효과를 냈습니다.
엘리베이터 상단 화면에서 해당 포트폴리오의 title을 슬라이드로 지나가면서 나타냅니다.

![1 메인화면](https://user-images.githubusercontent.com/108816777/223324567-acc2bdd2-7260-4005-a419-61c04dbae2b3.gif)


<br>
<br>

### ✅ 상세 포트폴리오 페이지
Portfolio카테고리에서 프로젝트 카드 클릭 시 해당 프로젝트 상세 페이지로 이동합니다.
상세 포폴 사이트는 슬라이드로 이미지 삽입 후 각 메뉴에 대한 설명이 기재되어있으며, 오른쪽에 프로젝트 기간, 인원, 역할, github-repo, 회고록 등 자세한 내용이 기재되어있습니다.
발표 동영상이 있는 경우에는 react-player이용하여 동영상을 삽입했습니다.
해당 페이지 navbar에서 first, second 등은 프로젝트 번호이며, 해당 메뉴에 hover시 프로젝트 이름이 나오도록 했습니다.

![2 포트폴리오 페이지](https://user-images.githubusercontent.com/108816777/223325127-bf9989f8-7f0d-4e21-8fb7-7b4c1b725c6b.gif)

<br>
<br>



### ✅ 반응형 제작
태블릿 가로 사이즈 768px 기준으로 해당 사이즈 이하로 줄어들 경우에 페이지 레이아웃이나 글씨 크기가 변경되도록 반응형으로 구현하였습니다.
반응형 사이즈일 때 navbar를 아이콘 toggle로 변경하여 재배치하도록 했습니다. 

![3 main mobile](https://user-images.githubusercontent.com/108816777/223326330-6254edf8-ec02-458c-ac09-7de611dd6c5c.gif)
![4 project main](https://user-images.githubusercontent.com/108816777/223326479-181e8b12-4533-4e9b-9fcc-f6d13c5b2de2.gif)

<br>
<br>


## 작성자 깃허브 및 블로그 계정

- 깃허브 https://github.com/KOWOONLEE
- 블로그 https://velog.io/@kkk5689
