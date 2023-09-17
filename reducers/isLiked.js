import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 value: {counter: null, isLiked: null},
};

export const tweetsSlice = createSlice({
 name: 'isliked',

  initialState,
 reducers: {
   isLiked: (state, action) => {
     state.value = action.payload;
   },
}});

export const { isLiked } = tweetsSlice.actions;
export default tweetsSlice.reducer;