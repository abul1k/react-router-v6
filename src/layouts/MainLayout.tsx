import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className='bg-lightGray dark:bg-darkGray h-[100vh] md:pl-[16vw] pl-3 pt-[85px]'>
        <Outlet />
      </div>
    </>
  )
}
