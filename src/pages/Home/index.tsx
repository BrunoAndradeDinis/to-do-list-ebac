import BotaoAdicionar from '../../components/BotaoAdicionar'
import Rodape from '../../components/Rodape'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
      <Rodape />
    </>
  )
}

export default Home
