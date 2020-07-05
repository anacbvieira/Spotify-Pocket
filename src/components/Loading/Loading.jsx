import React from 'react';
import propTypes from 'prop-types';

import './Loading.scss';

const Loading = ({ text }) => (
  <React.Fragment>
    <div className="loading" data-testid="loading">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>

    <p className="loading_text">
      {text}
    </p>
  </React.Fragment>
);

Loading.defaultProps = {
  text: 'Carregando...',
}

Loading.propTypes = {
  text: propTypes.string,
}

export default Loading;
