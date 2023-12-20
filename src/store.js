import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from './components/Menu/menuSlice';
export const store = configureStore({
  reducer : {
    menu:MenuReducer,
  },
})