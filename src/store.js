import { configureStore, createSlice } from "@reduxjs/toolkit";

const portfolioPage = createSlice({
  //state 이름
  name: "project",
  //key
  initialState: { portfolioPage: false },
  reducers: {
    portfolioPageOpen(state, action) {
      state.portfolioPage = true;
    },
    portfolioPageClose(state, action) {
      state.portfolioPage = false;
    },
  },
});
const eleActive = createSlice({
  name: "elebutton",
  initialState: { eleActive: false },
  reducers: {
    setOpen(state, action) {
      state.eleActive = true;
    },
    setClose(state, action) {
      state.eleActive = false;
    },
  },
});

export let { portfolioPageOpen, portfolioPageClose } = portfolioPage.actions;
export let { setOpen, setClose } = eleActive.actions;

export default configureStore({
  reducer: {
    portfolioPage: portfolioPage.reducer,
    eleActive: eleActive.reducer,
  },
});
