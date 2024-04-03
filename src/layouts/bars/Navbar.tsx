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
        <Icons icon='MagnifyingGlassIcon' className='w-6 h-6 text-primary' />
        <button
          className='flex gap-2 items-center hover:bg-primary/5 text-secondary hover:text-primary px-4 py-2 rounded-md'
          onClick={logout}>
          Log out
          <Icons icon='ArrowRightOnRectangleIcon' className='w-6 h-6' />
        </button>
      </div>
    </div>
  )
}
