import styled from 'styled-components'
import { Campo as CampoAtt } from '../../styles'

export const Aside = styled.aside`
  padding: 1rem;
  background-color: #eee;
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin-top: 1rem;
`

export const Campo = styled(CampoAtt)`
  line-height: normal;
`
