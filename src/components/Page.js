import styled, { css } from 'styled-components'

export default styled.div`
  width: 100vw;
  height: 100vh;
  background: #313131;
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
      color: #313131;
    `};
`
