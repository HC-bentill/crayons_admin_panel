import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import sideMenuReducer from "./features/sideMenuSlice";

export default configureStore( {
  // add slice to the store
  reducer: {
    user: userReducer,
    sideMenu: sideMenuReducer,
  },
});