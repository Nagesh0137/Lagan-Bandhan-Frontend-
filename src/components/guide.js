import React from 'react'

import PropTypes from 'prop-types'

import './guide.css'

const Guide = (props) => {
  return (
    <div className={`guide-guide ${props.rootClassName} `}>
      <img alt="image" src={props.portrait} className="guide-portrait" />
      <div className="guide-details">
        <h3 className="guide-name">{props.name}</h3>
        <span className="guide-location">{props.location}</span>
      </div>
    </div>
  )
}

Guide.defaultProps = {
  name: 'Miura Avaron',
  rootClassName: '',
  portrait: '/Guides/guide-1.png',
  location: 'Tokyo, Japan',
}

Guide.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  portrait: PropTypes.string,
  location: PropTypes.string,
}

export default Guide
