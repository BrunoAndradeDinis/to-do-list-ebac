import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? 'rgba(30, 144, 255, 1)' : '#5e5e5e')};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`
export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
