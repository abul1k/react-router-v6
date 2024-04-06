import { Icons } from '@/components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const [user] = useLocalStorage<{ username: string } | undefined>('user')
  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="navbar shadow">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-2">
          <Icons
            icon="Bars3Icon"
            className="w-6 h-6 text-primary visible md:hidden"
          />
          <Icons icon="MagnifyingGlassIcon" className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center">
          <span className="px-2 bg-dark/10 dark:bg-light/10 rounded text-light">
            {user?.username}
          </span>
          <Icons
            icon="UserCircleIcon"
            outline
            className="w-10 h-10 text-primary mx-2"
          />
          <button
            className="flex gap-2 items-center text-secondary dark:text-lightGray hover:bg-primary/5 hover:text-primary px-4 py-2 rounded-md"
            onClick={logout}>
            Logout
            <Icons icon="ArrowRightOnRectangleIcon" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
