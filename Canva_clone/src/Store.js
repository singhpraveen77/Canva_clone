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
  export const { toggleState } = sharedSlice.actions;
  
  const themeSlice = createSlice({
      name: 'theme',
      initialState: { value: false },
  
      reducers: {
        change_to: (state) => {
          state.value = ! state.value;
        }
      }
    });
  const set_thsemeSlice = createSlice({
      name: 'set_theme',
      initialState: { value: false },
  
      reducers: {
          set_theme_red: (state) => {
          state.value = ! state.value;
        }
      }
    });
    
  export const { set_theme_red } = set_thsemeSlice.actions;
  export const { change_to } = themeSlice.actions;
  // Export actions and reducer
  export const store = configureStore({ 
    reducer: { 
      shared: sharedSlice.reducer,
      theme: themeSlice.reducer,
      set_theme:set_thsemeSlice.reducer
    } 
  });