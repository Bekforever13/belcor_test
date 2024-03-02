import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'src/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSelectors = () => {
  const { auth, tests } = useAppSelector((s) => s)

  return {
    ...auth,
    ...tests,
  }
}
