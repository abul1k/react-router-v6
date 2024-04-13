import { AppRouter } from '@/router/AppRouter'
import { ToastContainer } from 'react-toastify'

export const App = () => {
  const isDarkMode = true

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <AppRouter />
      <ToastContainer
        stacked
        hideProgressBar
        draggable
        position='bottom-right'
        theme={isDarkMode ? 'dark' : 'light'}
        autoClose={3000}
      />
    </div>
  )
}
