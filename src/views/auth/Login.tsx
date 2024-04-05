import { Input } from '@/components'
import { SyntheticEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='w-full md:max-w-xs'>
      <form
        className='bg-light dark:bg-dark min-h-full h-screen md:h-full shadow-md rounded pt-[50%] px-8 md:pt-6 pb-8 mb-4'
        onSubmit={onSubmit}>
        <h1 className='text-center text-3xl font-medium mb-5'>Login</h1>
        <div className='mb-4'>
          <Input
            id='username'
            label='Username'
            placeholder='Username'
            type='text'
          />
        </div>
        <div className='mb-6'>
          <Input
            id='password'
            label='Password'
            placeholder='Password'
            type='password'
          />
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