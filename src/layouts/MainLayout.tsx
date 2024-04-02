import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <Navbar />
    </>
  )
}
