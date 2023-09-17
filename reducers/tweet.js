import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const tweetsSlice = createSlice({
 name: 'tweets',

  initialState,
 reducers: {
   addTweetToStore: (state, action) => {
     state.value.push(action.payload);
   },
   removeTweetToStore: (state, action) => {
    state.value.splice(state.value.findIndex((tweet) => tweet.id === action.payload), 1);
  },
}});

export const addTweet = (state) => state.tweets.value;

export const { addTweetToStore, removeTweetToStore } = tweetsSlice.actions;
export default tweetsSlice.reducer;