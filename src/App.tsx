import { AppRouter } from '@/router/AppRouter'

export const App = () => {
  const isDarkMode = false

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <AppRouter />
    </div>
  )
}
