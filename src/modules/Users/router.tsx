import { UserDetails } from './pages/UserDetails'
import { Users } from './views/Users'

const routes = [
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/:id',
    element: <UserDetails />,
  },
]

export default routes
