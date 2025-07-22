import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles/index'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }

    return tarefasFiltradas
  }

  const tarefas = filtraTarefas()
  const categoria = `${criterio} = ${valor}`
  const complementacao =
    termo != undefined && termo?.length > 0 ? `e "${termo}"` : ' '

  const exibeResultadoFiltragem = (qtd: number) => {
    let mensagem = ''
    if (criterio === 'todas') {
      mensagem = `${qtd} tarefas encontradas como: todas ${complementacao}`
      if (qtd <= 1 && qtd > 0) {
        mensagem = `${qtd} tarefa encontrada como: todas ${complementacao}`
      }
    } else {
      mensagem = `${qtd} tarefas encontradas como: "${categoria}" ${complementacao}`
      if (qtd <= 1 && qtd > 0) {
        mensagem = `${qtd} tarefa encontrada como: "${categoria}" ${complementacao}`
      }
    }
    return mensagem
  }

  const mensagem = exibeResultadoFiltragem(tarefas.length)
  return (
    <>
      <MainContainer>
        <Titulo as="p">{mensagem}</Titulo>
        <ul>
          {tarefas.length == 0 ? (
            <>
              <h3>🐱‍💻 Xiii, nenhuma tarefa, vai ter que adicionar!</h3>
            </>
          ) : (
            tarefas.map((ta) => (
              <li key={ta.titulo}>
                <Tarefa
                  descricao={ta.descricao}
                  prioridade={ta.prioridade}
                  status={ta.status}
                  titulo={ta.titulo}
                  id={ta.id}
                />
              </li>
            ))
          )}
        </ul>
      </MainContainer>
    </>
  )
}

export default ListaDeTarefas

