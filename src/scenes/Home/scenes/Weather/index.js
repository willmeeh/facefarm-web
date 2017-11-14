import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class WeatherForecast extends Component {

  render() {
    return (
      <div>
        <h1>WeatherForecast</h1>
      </div>

    );
  }
}

export default withRouter(WeatherForecast);