import React from 'react'

import PropTypes from 'prop-types'

import './offer.css'

const Offer = (props) => {
  return (
    <div className="offer-offer">
      <img alt="image" src={props.image} className="offer-image" />
      <div className="offer-content">
        <div className="offer-details">
          <span className="offer-text">{props.location}</span>
          <span className="offer-text1">{props.guides}</span>
        </div>
        <span className="offer-text2">{props.description}</span>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
  guides: '3 Local guides',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  location: 'Crete, Greece',
}

Offer.propTypes = {
  image: PropTypes.string,
  guides: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
}

export default Offer
