import { configureStore, createSlice } from "@reduxjs/toolkit";

const portfolioProject = createSlice({
  //state 이름
  name: "project",
  //key
  initialState: { portfolioPage: false },
  reducers: {
    setPortfolioPage(state, action) {
      state.portfolioPage(true);
      // state.name = 'park' 직접 수정 가능
    },
    //파라미터 문법 사용하기
    // changeAge(state, action) { //state변경함수를 action이라고 함
    //   state.age += action.payload;
    // },
  },
});
// changeAge(10)
// changeAge(100)
const eleActive = createSlice({
  //state 이름
  name: "elebutton",
  //key
  initialState: { eleActive: false },
  reducers: {
    setEleActive(state, action) {
      state.eleActive = true;
    },
  },
});

export let { setPortfolioPage } = portfolioProject.actions;
export let { setEleActive } = eleActive.actions;

export default configureStore({
  //위에 등록한거 가져와야함.
  reducer: {
    portfolioProject: portfolioProject.reducer,
    eleActive: eleActive.reducer,
  },
});
