import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'
import Map from './Map'

const Venue = ({
  name,
  address,
  accessibility,
  coordinates,
  closestStations
}) => (
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
      `}
    >
      <div>
        <h3>{name}</h3>
        <h4>Address</h4>
        <p
          css={`
            margin-bottom: 20px;
          `}
        >
          {address}
        </p>
        <h4>Closest Stations</h4>
        <p
          css={`
            margin-bottom: 20px;
          `}
        >
          {closestStations}
        </p>
        <h4>Accessibility</h4>
        {accessibility.accessibility.split('\n').map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </div>
      <Map coordinates={{ ...coordinates, lng: coordinates.lon }} />
    </div>
  </Page>
)

export default Venue
