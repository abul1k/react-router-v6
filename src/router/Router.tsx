import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import users from '../modules/Users/router'
import home from '../modules/Home/router'

export const Router = () => {
  const router = createBrowserRouter([...home, ...users])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
