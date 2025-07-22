import Rodape from '../../components/Rodape'
import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

const Cadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
      <Rodape />
    </>
  )
}

export default Cadastro
