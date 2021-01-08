import { createSlice } from '@reduxjs/toolkit';

// Slice
export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    main: {
      playLogoAnimation: true,
    },
  },
  reducers: {
    handleLogoAnimation: (state, action) => {
      state.main.playLogoAnimation = action.payload;
    },
  },
});

export const { actions } = mainSlice;