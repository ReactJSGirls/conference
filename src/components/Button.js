import styled from 'styled-components'

export default styled.a`
  text-decoration: none;
  background: transparent;
  border: 3px solid #fb8e82;
  padding: 10px 15px;
  position: relative;
  transition: all 200ms ease;

  &:hover {
    color: #fff;

    &:after,
    &:before {
      width: 50%;
    }
  }

  &:after,
  &:before {
    transition: all 200ms ease;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #fb8e82;
    z-index: -1;
  }

  &:before {
    right: 0;
    left: auto;
  }

  &:first-child {
    margin-right: 20px;
  }
`
