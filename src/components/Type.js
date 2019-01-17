import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 11px;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

export const Tagline = styled.p`
  font-size: 24px;
  max-width: 400px;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const Date = styled.span`
  font-size: 33px;
  color: #7a7f8d;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
