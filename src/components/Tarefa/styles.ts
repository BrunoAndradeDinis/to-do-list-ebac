import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Tarefa'

import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDO) return variaveis.verde
  }

  return '#ccc'
}

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    input {
      cursor: pointer;
    }

    input:checked + h3 {
      text-decoration: line-through;
      opacity: 0.6;
    }
  }

  button:disabled {
    background-color: #ccc;
    cursor: context-menu;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 0.25rem 0.5rem;
  font-weight: bold;
  color: #fff;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  display: inline-block;
  cursor: context-menu;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto-mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  resize: none;
  background-color: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
