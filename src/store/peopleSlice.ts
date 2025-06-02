// src/store/peopleSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Person } from '../types/person';

interface PeopleState {
  people: Person[];
  count: number;
}

const initialState: PeopleState = {
  people: [],
  count: 0,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople(state, action: PayloadAction<{ results: Person[]; count: number }>) {
      state.people = action.payload.results;
      state.count = action.payload.count;
      console.log('✅ Stored in Redux:', action.payload); 
    },
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;

