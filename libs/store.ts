import { configureStore } from '@reduxjs/toolkit';
import selectedCityReducer from './features/city';

export const makeStore = () =>
  configureStore({
    reducer: {
      selectedCity: selectedCityReducer,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
