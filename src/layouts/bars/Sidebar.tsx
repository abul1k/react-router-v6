import { NavLink } from 'react-router-dom'
import { sidebarItems } from '../constants'
import { ISidebarItems } from '../constants/interface'

export const Sidebar = () => {
  const sidebar: ISidebarItems[] = sidebarItems
  return (
    <div>
      Sidebar
      {sidebar.map((route) => (
        <div key={route.path}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </div>
      ))}
    </div>
  )
}
