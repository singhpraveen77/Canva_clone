import { configureStore, createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: { value: false },

    reducers: {
      toggleState: (state) => {
        state.value = !state.value; // Toggle the state
      },
    }
  });

const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: false },

    reducers: {
      change_to: (state) => {
        state.value = ! state.value;
      }
    }
  });
  
  export const { toggleState } = sharedSlice.actions;
  export const { change_to } = themeSlice.actions;
  // Export actions and reducer
  export const store = configureStore({ 
    reducer: { 
      shared: sharedSlice.reducer,
      theme: themeSlice.reducer
    } 
  });