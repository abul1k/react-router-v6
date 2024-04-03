import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className='bg-lightGray dark:bg-slate-800 h-[100vh] pl-[16vw] pt-[70px]'>
        <Outlet />
      </div>
    </>
  )
}
