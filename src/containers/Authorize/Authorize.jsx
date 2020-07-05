import React from 'react';

import './Authorize.scss';

import backgroundImage from '../../assets/images/app-intro-1.jpg'
import {Loading} from '../../components'

const Authorize = () => {
  return (
    <div 
      className="callback" 
      data-testid="callback"
      style={{backgroundImage: `url(${backgroundImage})`}} 
    >
      <div className="container">
        <Loading text='Autenticando' />
      </div>
    </div>
  );
}

export default Authorize;

