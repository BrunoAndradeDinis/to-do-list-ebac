import styled from 'styled-components'
import { Titulo as principal } from '../../styles'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  color: #666666;

  textarea {
    resize: none;
    margin: 1rem 0;
  }
`

export const Opcoes = styled.div`
  margin: 0 0 1rem;

  p {
    margin-bottom: 0.5rem;
  }
  label {
    margin-right: 0.5rem;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

export const TituloPrincipal = styled(principal)`
  font-size: 1.8rem;
`
