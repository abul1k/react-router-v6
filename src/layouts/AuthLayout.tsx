import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <Outlet />
      </div>
    </>
  )
}
