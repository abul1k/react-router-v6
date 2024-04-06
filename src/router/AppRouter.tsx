import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NotFound404 } from '@/views/NotFound404'
import auth from '@/views/auth/router'
import users from '@/modules/Users/router'
import home from '@/modules/Home/router'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const AppRouter = () => {
  const [user] = useLocalStorage<{ username: string; password: string }>('user')

  const mainRoutes = createBrowserRouter([
    // modules
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound404 />,
      children: [...home, ...users],
    },

    // authorization pages
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound404 />,
      children: [...auth],
    },
  ])

  const loginNotRequiredRoutes = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <Navigate to="/login" replace />,
      children: [...auth],
    },
  ])

  return (
    <>
      <RouterProvider
        router={user?.username ? mainRoutes : loginNotRequiredRoutes}
      />
    </>
  )
}
