import { SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='w-full max-w-xs'>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={onSubmit}>
        <h1 className='text-center text-3xl font-medium mb-5'>Log In</h1>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='******************'
          />
          <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p>
        </div>
        <input
          className='cursor-pointer bg-primary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
          value='Sign In'
        />
        <Link
          className='text-center block mt-4 text-primary hover:underline'
          to='/register'>
          Do not have account yet?
        </Link>
      </form>
    </div>
  )
}
