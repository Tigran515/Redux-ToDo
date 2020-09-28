import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const initialState = {};

let store = configureStore({
    reducer,
    preloadedState: initialState,
  });

store.subscribe(() => console.log("SUBSCRIBER: ", store.getState()));

export default store;
