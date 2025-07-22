import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricaco: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricaco
    this.id = id
  }
}

export default Tarefa
