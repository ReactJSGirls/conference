import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'
import styled from 'styled-components'
import Twitter from '../assets/twitter.svg'
import Github from '../assets/github.svg'
import Website from '../assets/website.svg'

const Speakers = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 255px);
  grid-gap: 40px;
  justify-content: center;

  @media screen and (max-width: 986px) {
    grid-template-columns: repeat(2, 255px);
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 255px);
  }
`

const Social = styled.ul`
  display: flex;
  margin-top: 20px;

  li {
    margin-right: 10px;
    transition: all 200ms ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Avatar = styled.figure`
  width: 255px;
  height: 255px;
  background-image: url(${props => props.photo});
  background-size: cover;
  background-position: 50% 50%;
  filter: grayscale(0.3);
  margin-bottom: 20px;
  transition: all 200ms ease;
  border-radius: 3px;

  &:hover {
    filter: grayscale(0);
  }
`

const Venue = ({ speakers: { edges: speakers } }) => (
  <div
    css={`
      background: white;
    `}
  >
    <Page>
      <PageTitle>Speakers</PageTitle>
      <Speakers>
        {speakers.map(({ node: speaker }) => {
          return (
            <div key={speaker.id}>
              <Avatar photo={speaker.photo.file.url} />
              <h5
                css={`
                  font-size: 24px;
                  color: #7a7f8d;
                  padding-bottom: 5px;
                `}
              >
                {speaker.name}
              </h5>
              <span
                css={`
                  font-size: 18px;
                  color: #232c3d;
                `}
              >
                {speaker.job}
              </span>

              <span
                css={`
                  padding-top: 20px;
                  display: block;
                  font-size: 16px;
                  color: #232c3d;
                `}
              >
                {speaker.talk.title}
              </span>
              <Social>
                {speaker.twitter ? (
                  <li>
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter />
                    </a>
                  </li>
                ) : null}
                {speaker.github ? (
                  <li>
                    <a
                      href={speaker.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </a>
                  </li>
                ) : null}
                {speaker.website ? (
                  <li>
                    <a
                      href={speaker.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Website />
                    </a>
                  </li>
                ) : null}
              </Social>
            </div>
          )
        })}
      </Speakers>
    </Page>
  </div>
)

export default Venue
