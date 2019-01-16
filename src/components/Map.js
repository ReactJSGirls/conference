import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

var styles = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 45
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },

  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#e8cfc7'
      },
      {
        visibility: 'on'
      }
    ]
  }
]
const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpDkPdvwEG9mxQ3sA6vaKrq64V7trj_4',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          height: 400,
          borderRadius: 4,
          overflow: 'hidden',
          width: '100%'
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ coordinates }) => (
  <GoogleMap
    defaultOptions={{ styles }}
    defaultZoom={15}
    defaultCenter={coordinates}
  >
    <Marker position={coordinates} />
  </GoogleMap>
))

export default MapComponent
