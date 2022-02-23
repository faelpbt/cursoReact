import { AppRoutes } from './routes'
import { UsuarioLogadoProvider } from './contexts'

function App() {
  return (
    <UsuarioLogadoProvider>
      <AppRoutes />
    </UsuarioLogadoProvider>
  )
}

export default App
