import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { NotFound404 } from './pages/NotFound404'
import { ContactDetails } from './pages/ContactDetails'

export const App = () => {
  const router = createBrowserRouter([
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
