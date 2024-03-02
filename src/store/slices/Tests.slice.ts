import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  selectedTestID: 0,
}

const TestsSlice = createSlice({
  name: 'TestsSlice',
  initialState,
  reducers: {
    setSelectedTestID(state, { payload }: PayloadAction<number>) {
      state.selectedTestID = payload
    },
  },
})

export const { reducer, actions } = TestsSlice
