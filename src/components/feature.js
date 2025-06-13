import React from 'react'

import PropTypes from 'prop-types'

import './feature.css'

const Feature = (props) => {
  return (
    <div className="feature-feature">
      <div className="feature-heading">
        <img alt="image" src={props.icon} className="feature-icon" />
        <h3 className="feature-header">{props.header}</h3>
      </div>
      <p className="feature-description">{props.description}</p>
    </div>
  )
}

Feature.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icon: '/Icons/thumbs-up.svg',
  header: 'Hand Picked Guides',
}

Feature.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  header: PropTypes.string,
}

export default Feature
