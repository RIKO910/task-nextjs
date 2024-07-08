// store/index.js (or store.ts if you're using TypeScript)
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import authSlice, { loginSuccess } from './slices/auth';
import { getTokenFromCookies } from '../utils/getTokenFromCookies';
import api from "@/app/lib/axios";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

const token = getTokenFromCookies();
if (token) {
  // Fetch user information using the token
  api.get('/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        store.dispatch(loginSuccess({ user: response.data.user, token }));
      })
      .catch(error => {
        console.error('Failed to fetch user info with token', error);
      });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
