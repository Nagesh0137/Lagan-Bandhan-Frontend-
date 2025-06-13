import React from 'react'

import PropTypes from 'prop-types'

import './location.css'

const Location = (props) => {
  return (
    <div className="location-item">
      <img alt="image" src={props.background} className="location-background" />
      <div className="location-content">
        <span className="location-location">{props.location}</span>
      </div>
    </div>
  )
}

Location.defaultProps = {
  background: '/Destinations/destination-1-400h.png',
  location: 'Tokyo, Japan',
}

Location.propTypes = {
  background: PropTypes.string,
  location: PropTypes.string,
}

export default Location
