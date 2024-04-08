import $axios from '@/plugins/axios'

export const Users = () => {
  (async function () {
    const { data } = await $axios.get('/auth/users')
    return data
  })()
  
  return (
    <div className='card'>
      <h1 className='text-4xl'>Users</h1>
    </div>
  )
}
