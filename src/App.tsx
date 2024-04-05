import { AppRouter } from '@/router/AppRouter'

export const App = () => {
  const isDarkMode = true

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <AppRouter />
    </div>
  )
}
