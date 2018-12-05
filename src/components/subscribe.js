import React from 'react'
import styled from '@emotion/styled'

const Form = styled.form`
  display: flex;
  margin-top: 60px;
`

const Input = styled.input`
  height: 44px;
  padding: 10px;
  font-size: 16px;
  border: 3px solid #fb8e82;
  color: #333;
  background: #fff;
  min-width: 150px;

  &.no-right {
    border-right: none;
  }
`
const Wrapper = styled.div`
  display: flex;
`

const InputWrapper = styled.div`
  position: relative;

  input:focus + label {
    opacity: 0;
  }

  label {
    transition: all 200ms ease;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    color: #333;
    font-size: 20px;
    font-family: 'Dank Mono';
    opacity: 0.8;
  }
`

const Button = styled.button`
  font-size: 16px;
  appearance: none;
  text-decoration: none;
  background: transparent;
  border: 3px solid #fb8e82;
  padding: 10px 15px;
  position: relative;
  transition: all 200ms ease;
  color: white;
  font-size: 100%;
  border-left: none;

  &:hover {
    color: #313131;

    &:after,
    &:before {
      width: 51%;
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

export default () => {
  return (
    <Form id="mc_embed_signup">
      <form
        action="https://yld.us16.list-manage.com/subscribe/post?u=d159c019fc10dc08b3914ac05&amp;id=9d56206115"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <h2 style={{ textAlign: 'center' }}>Signup for news</h2>
        <Wrapper id="mc_embed_signup_scroll">
          <InputWrapper>
            <Input required type="text" name="FNAME" id="mce-FNAME" />
            <label htmlFor="mce-FNAME">Name </label>
          </InputWrapper>
          <InputWrapper>
            <Input
              className="no-right"
              type="email"
              required
              name="EMAIL"
              id="mce-EMAIL"
            />
            <label htmlFor="mce-EMAIL">Email</label>
          </InputWrapper>
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: 'none' }} />
            <div id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <Input
              type="text"
              name="b_d159c019fc10dc08b3914ac05_9d56206115"
              tabIndex="-1"
            />
          </div>
          <div>
            <Button type="submit" name="subscribe" id="mc-embedded-subscribe">
              Subscribe
            </Button>
          </div>
        </Wrapper>
      </form>
    </Form>
  )
}
