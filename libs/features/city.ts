import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface City {
  selectedCity?: string;
}

const initialState: City = {};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCity } = citySlice.actions;

export default citySlice.reducer;
