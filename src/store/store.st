import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './carrinhoSlice';
import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

// Tipo do estado global
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
