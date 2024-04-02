import { MainLayout } from '../../layout/MainLayout'
import { UserDetails } from './pages/UserDetails'
import Users from './views/Users'

const routes = [
  {
    path: '/users',
    element: (
      <MainLayout>
        <Users />
      </MainLayout>
    ),
  },
  {
    path: '/users/:id',
    element: <UserDetails />,
  },
]

export default routes
