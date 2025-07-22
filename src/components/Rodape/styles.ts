import styled from 'styled-components'

export const RodapeFixo = styled.footer`
  position: fixed;
  padding: 0.5rem 0 1rem;
  display: flex;
  max-width: 100vw;
  width: 100%;
  bottom: 0;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 204, 255, 0.5) 100%
  );
  transition: 1.3s ease-in-out;

  &:hover {
    background-color: rgba(247, 0, 255, 0.5);
  }
  a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: orangered;
    }
  }
`
