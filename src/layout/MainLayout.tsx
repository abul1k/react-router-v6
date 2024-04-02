import { Sidebar } from './bars/Sidebar'
import { Navbar } from './bars/Navbar'

interface IProps {
  children: string | JSX.Element | JSX.Element[]
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  )
}
