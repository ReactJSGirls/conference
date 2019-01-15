import styled, { css } from 'styled-components'

export default styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #140e35;
  color: #fff;
  ${props =>
    props.center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  ${props =>
    props.light &&
    css`
      background: #fff;
      color: #140e35;
    `};
`
