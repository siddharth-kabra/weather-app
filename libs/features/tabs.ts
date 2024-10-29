import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Tab {
  activeTab?: string;
}

const initialState: Tab = {};

export const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTab } = tabSlice.actions;

export default tabSlice.reducer;
