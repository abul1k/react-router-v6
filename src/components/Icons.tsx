import { FC } from 'react'
import * as HIcons from '@heroicons/react/24/solid'

interface IProps {
  icon: keyof typeof HIcons
  className: string
}

interface ISidebarProps {
  icon: string
  className: string
}

export const Icons: FC<IProps> = ({ icon, className }) => {
  const TheIcon = HIcons[icon]

  return (
    <>
      <TheIcon className={className} aria-hidden='true' />
    </>
  )
}

export const SidebarIcons: FC<ISidebarProps> = ({ icon, className }) => {
  const TheIcon = HIcons[icon as keyof typeof HIcons]

  return (
    <>
      <TheIcon className={className} aria-hidden='true' />
    </>
  )
}
