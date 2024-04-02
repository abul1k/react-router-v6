import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound404 } from '../pages/NotFound404'
import { Contact } from '../pages/Contact'
import { ContactDetails } from '../pages/ContactDetails'
import users from '../modules/Users/router'

export const Router = () => {
  const router = createBrowserRouter([
    ...users,
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound404 />,
    },
    {
      path: '/contacts',
      element: <Contact />,
      children: [
        {
          path: '/contacts/:id',
          element: <ContactDetails />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
