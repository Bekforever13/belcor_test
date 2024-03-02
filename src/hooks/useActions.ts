import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions as auth } from '@/store/slices/Auth.slice'
import { actions as tests } from '@/store/slices/Tests.slice'

const rootActions = {
  ...auth,
  ...tests,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return React.useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
