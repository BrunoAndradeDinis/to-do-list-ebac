import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #f0f8ff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 40px;
  border-radius: 50%;
  padding-bottom: 0.5rem;

  &:hover {
    opacity: 0.6;
  }
`
