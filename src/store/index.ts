import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as auth } from './slices/Auth.slice'
import { reducer as tests } from './slices/Tests.slice'
import { setupListeners } from '@reduxjs/toolkit/query'

const reducers = combineReducers({
  auth,
  tests,
})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
