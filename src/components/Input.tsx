import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <label className='block text-sm mb-2' htmlFor={id}>
      <span className='block mb-1'>{label}</span>
      <input
        id={id}
        className='bg-light dark:bg-darkGray dark:border-darkGray dark:text-light shadow appearance-none border rounded w-full p-3 leading-tight focus:outline focus:outline-2 focus:outline-primary'
        {...props}
      />
    </label>
  )
}
