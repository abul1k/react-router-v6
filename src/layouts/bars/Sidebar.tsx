import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { sidebarItems } from '../constants'
import { ISidebarItems } from '../constants/interface'
import { Icons, SidebarIcons } from '@/components'

export const Sidebar = () => {
  const sidebar: ISidebarItems[] = sidebarItems
  const { pathname } = useLocation()
  return (
    <div className='sidebar-overflow'>
      <div className='sidebar'>
        <div className='sidebar_brand'>
          <h1 className='sidebar_brand_name'>React JS</h1>
          <button>
            <Icons icon='Bars3Icon' className='w-6 h-6 text-primary' />
          </button>
        </div>
        {sidebar.map((route) => (
          <div key={route.path} className='sidebar_routes'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'sidebar_routes_route_active'
                  : 'sidebar_routes_route'
              }
              to={route.path}>
              <SidebarIcons
                icon={route.icon}
                className={`w-4 h-4 ${
                  pathname === route.path ? 'text-primary' : ''
                }`}
              />
              <span>{route.name}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}
