import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div className='flex gap-4'>
      <Sidebar />
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
