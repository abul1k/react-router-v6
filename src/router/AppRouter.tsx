import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { NotFound404 } from '@/views/NotFound404'
import auth from '@/auth/router'
import users from '@/modules/Users/router'
import home from '@/modules/Home/router'

export const AppRouter = () => {
  const isAuthorized = true //fake authorization

  const mainRoutes = createBrowserRouter([
    {
      path: '/',
      element: isAuthorized ? <MainLayout /> : <Navigate to='/login' replace />,
      errorElement: <NotFound404 />,
      children: [...home, ...users],
    },
    {
      path: '/',
      element: <AuthLayout />,
      errorElement: <NotFound404 />,
      children: [...auth],
    },
  ])

  const loginNotRequiredRoutes = createBrowserRouter([...auth])

  return (
    <>
      <RouterProvider
        router={isAuthorized ? mainRoutes : loginNotRequiredRoutes}
      />
    </>
  )
}