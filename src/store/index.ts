// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
