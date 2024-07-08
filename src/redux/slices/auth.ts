// src/redux/slices/auth.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TUser = {
  id: number;
  name: string;
  email: string;
  // Add any other user fields you need here
};

interface TAuthState {
  isAuthenticated: boolean;
  user: TUser | null;
  token: string | null;
  flag: {
    isFetch: boolean;
    isEdit: boolean;
    isDelete: boolean;
  };
}

// Define the initial state using that type
const initialState: TAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  flag: {
    isFetch: false,
    isEdit: false,
    isDelete: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    setUser: (state, action: PayloadAction<TUser | null>) => {
      state.user = action.payload;
    },
    setFlag: (state, action: PayloadAction<{ flagName: 'fetch' | 'edit' | 'delete'; value: boolean }>) => {
      const { flagName, value } = action.payload;
      state.flag[`is${flagName.charAt(0).toUpperCase() + flagName.slice(1)}` as keyof TAuthState['flag']] = value;
    },
  },
});

export const { loginSuccess, logout, setUser, setFlag } = authSlice.actions;

export default authSlice.reducer;
