
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 value: {name: null, email: null },
};

export const usersSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   addNameToStore: (state, action) => {
     state.value.name = action.payload.name;
     state.value.email = action.payload.email;
     
     console.log('Add UserName_', action.payload)
     console.log('Value Stock _', state.value.name)
   },
   addEmailToStore: (state, action) => {
    state.value.email = action.payload;
    console.log('Add email _', action.payload);
 },
}});

export const { addNameToStore, addEmailToStore } = usersSlice.actions;
export default usersSlice.reducer;