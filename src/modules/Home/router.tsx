import { RouteObject } from 'react-router-dom'
import { MainLayout } from '../../layout/MainLayout'
import { Home } from './views/Home'
import { NotFound404 } from './views/NotFound404'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <NotFound404 />,
  },
]

export default routes
