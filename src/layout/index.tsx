import { useActions } from '@/hooks/useActions'
import { useSelectors } from '@/hooks/useSelectors'
import { Popconfirm, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { isAuth } = useSelectors()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { setAuth, setUser, setSelectedTestID } = useActions()

  const handleLogout = () => {
    localStorage.removeItem('belcor_password')
    localStorage.removeItem('belcor_username')
    setAuth(false)
    setUser({ username: '', password: '' })
    navigate('/login')
  }

  useEffect(() => {
    !isAuth && navigate('/login')
  }, [pathname])

  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
    }
  }, [])

  if (!isMounted) {
    return <Spin spinning />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-[100px] lg:px-40 md:px-10 sm:px-5 shadow-lg bg-slate-200">
        <Link
          onClick={() => setSelectedTestID(0)}
          to="/"
          className="font-semibold text-3xl transition-all hover:text-red-500"
        >
          BELCOR
        </Link>
        <Popconfirm
          className="cursor-pointer transition-all hover:text-red-500"
          title="Are you want to logout?"
          onConfirm={handleLogout}
        >
          Logout
        </Popconfirm>
      </header>
      <main className="flex-grow lg:px-40 md:px-10 sm:px-5 xs:px-5 py-10 bg-slate-100">
        <Outlet />
      </main>
    </div>
  )
}

export { Layout }
