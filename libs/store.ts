import { configureStore } from '@reduxjs/toolkit';
import selectedCityReducer from './features/city';
import selectedTabReducer from './features/tabs';

export const makeStore = () =>
  configureStore({
    reducer: {
      selectedCity: selectedCityReducer,
      selectedTab: selectedTabReducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
