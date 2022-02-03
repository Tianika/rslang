import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginFetch: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    }
  }
});

export const { loginFetch } = loginSlice.actions;

export default loginSlice.reducer;
