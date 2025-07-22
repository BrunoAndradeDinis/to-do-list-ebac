import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './store'
import Home from './pages/Home'
import Cadatro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: '/novo',
    element: <Cadatro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
