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
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#444444'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'administrative.province',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        saturation: '-100'
      },
      {
        lightness: '30'
      }
    ]
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        gamma: '0.00'
      },
      {
        lightness: '74'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff'
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
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        color: '#ff0000'
      },
      {
        saturation: '-15'
      },
      {
        lightness: '40'
      },
      {
        gamma: '1.25'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ff0000'
      },
      {
        lightness: '80'
      }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#efefef'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  }
]
const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpDkPdvwEG9mxQ3sA6vaKrq64V7trj_4',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultOptions={{ styles }}
    defaultZoom={14}
    defaultCenter={{ lat: 51.5265124, lng: -0.1366859 }}
  >
    <Marker position={{ lat: 51.5265124, lng: -0.1366859 }} />
  </GoogleMap>
))

export default MapComponent
