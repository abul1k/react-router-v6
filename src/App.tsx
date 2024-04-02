import { AppRouter } from '@/router/AppRouter'

export const App = () => {
  const currentTheme = 'dark'

  return (
    <div className={currentTheme}>
      <AppRouter />
    </div>
  )
}
