import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: {
    username: '',
    password: '',
  },
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload
    },
    setUser(state, { payload }: PayloadAction<typeof state.user>) {
      state.user = payload
    },
  },
})

export const { reducer, actions } = authSlice
