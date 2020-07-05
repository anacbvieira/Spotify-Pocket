import React from 'react';
import propTypes from 'prop-types'

import './WelcomeBox.scss';

const WelcomeBox = ({ name }) => (
  <div className="welcome-box" data-testid="welcome-box">
    <div className="container">
      <span>Bem vindo <strong>{name}</strong></span>
    </div>
  </div>
);

WelcomeBox.defaulProps = {
  name: ''
}

WelcomeBox.propTypes = {
  name:propTypes.string
}

export default WelcomeBox;
