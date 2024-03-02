import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '@/pages'
import { Layout } from './layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export { App }
