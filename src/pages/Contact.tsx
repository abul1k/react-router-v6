import { NavLink, Outlet } from 'react-router-dom'

export const Contact = () => {
  const contactId = [1, 2, 3, 4, 5]

  return (
    <>
      {contactId.map((contact) => (
        <div key={contact}>
          <NavLink
            to={`${contact}`}
            className={({ isActive }) => (isActive ? 'active-route' : '')}>
            Contact {contact}
          </NavLink>
        </div>
      ))}
      <Outlet />
    </>
  )
}
