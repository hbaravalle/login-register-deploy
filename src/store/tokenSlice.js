import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    prueba(state, action) {
      return 'Probando... 1, 2, 3...';
    },
    setToken(state, action) {
      return action.payload;
    },
  },
});

export const { prueba, setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
