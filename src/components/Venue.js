import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'
import Map from './Map'

const Venue = () => (
  <Page
    css={`
      background: #ffffff;
      box-shadow: 0 72px 80px 0 rgba(45, 54, 95, 0.05);
      padding: 50px;
      border-radius: 20px;
    `}
  >
    <PageTitle>Venue</PageTitle>

    <div
      css={`
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
      `}
    >
      <div>
        <h3>30 Euston Square</h3>
        <h4>Address</h4>
        <p
          css={`
            margin-bottom: 20px;
          `}
        >
          30 Euston Square, London NW1 2FB
        </p>
        <h4>Closest Stations</h4>
        <p
          css={`
            margin-bottom: 20px;
          `}
        >
          Euston, Euston Square
        </p>
        <h4>Accessibility</h4>
        <p>The venue provides step-free access,</p>{' '}
        <p>and additional assistance for anyone who requires it</p>
      </div>
      <Map />
    </div>
  </Page>
)

export default Venue
