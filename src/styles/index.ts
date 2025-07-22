import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    list-style: none;
    text-decoration: none;
    transition: 0.3s ease-in-out;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  font-weight: bold;
  display: block;
  margin: 40px auto;
  font-size: 18px;
`
export const Campo = styled.input`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #fff;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 0.5rem;
  margin-right: 1rem;

  &:hover {
    opacity: 0.6;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
