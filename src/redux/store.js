import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "redux/ItemSlice";
import filterReducer from 'redux/filterSlice'

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
