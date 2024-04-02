import { useParams } from 'react-router-dom'

export const ContactDetails = () => {
  const { id } = useParams<{ id: string }>()

  return <div>ContactDetails {id}</div>
}
