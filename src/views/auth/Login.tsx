import { SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@/components'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useLocalStorage('user', {
    username: '',
    password: '',
  })

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="w-full md:max-w-xs ">
      <form
        className="bg-light flex items-center justify-center dark:bg-dark min-h-full h-screen md:h-full shadow-md rounded px-8 md:pt-6 pb-8 mb-4"
        onSubmit={onSubmit}>
        <div className="w-full">
          <h1 className="text-center text-3xl font-medium mb-5">Login</h1>
          <Input
            className="mb-4"
            id="username"
            label="Username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Input
            className="mb-6"
            id="password"
            label="Password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            className="cursor-pointer bg-primary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Sign In"
          />
          <Link
            className="text-center block mt-4 text-primary hover:underline"
            to="/register">
            Do not have account yet?
          </Link>
        </div>
      </form>
    </div>
  )
}
