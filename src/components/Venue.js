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
  <div
    css={`
      background: white;
    `}
  >
    <Page>
      <PageTitle>Venue</PageTitle>

      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;

          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <div
          css={`
            @media screen and (max-width: 768px) {
              margin-bottom: 40px;
            }
          `}
        >
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
  </div>
)

export default Venue
