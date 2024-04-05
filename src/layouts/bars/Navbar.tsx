import { Icons } from '@/components'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
  }
  return (
    <div className='navbar'>
      <div className='flex justify-between w-full items-center'>
        <div className='flex gap-2'>
          <Icons icon='Bars3Icon' className='w-6 h-6 text-primary visible md:hidden' />
          <Icons icon='MagnifyingGlassIcon' className='w-6 h-6 text-primary' />
        </div>
        <button
          className='flex gap-2 items-center text-secondary dark:text-lightGray hover:bg-primary/5 hover:text-primary px-4 py-2 rounded-md'
          onClick={logout}>
          Logout
          <Icons icon='ArrowRightOnRectangleIcon' className='w-6 h-6' />
        </button>
      </div>
    </div>
  )
}
