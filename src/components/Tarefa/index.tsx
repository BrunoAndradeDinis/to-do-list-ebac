import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { alteraStatus, editar, remover } from '../../store/reducers/tarefas'
import { BotaoSalvar, Botao } from '../../styles'

import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    descricaoOriginal.length > 0 ? setDescricao(descricaoOriginal) : ''
  }, [descricaoOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const alteraStatusTarefa = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      alteraStatus({
        id,
        finalizado: e.target.checked
      })
    )
  }

  const inputRef = useRef<HTMLTextAreaElement>(null)

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDO}
          onChange={alteraStatusTarefa}
          disabled={estaEditando}
        />
        <S.Titulo>
          {estaEditando && <em>editando... </em>}

          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade} title="prioridade">
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status} title="status">
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        ref={inputRef}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        autoFocus={estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    id,
                    prioridade,
                    status,
                    titulo
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao
              onClick={() => {
                setEstaEditando(true)
                setTimeout(() => {
                  inputRef.current?.focus()
                }, 0)
              }}
              disabled={status === enums.Status.CONCLUIDO}
            >
              Editar
            </Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
