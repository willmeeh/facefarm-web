import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Commodities extends Component {

  render() {
    return (
      <div>
        <h1>Commodities</h1>

        <div>
          <object type="text/html" data="https://www.agrolink.com.br/cotacoes/" width="700px" height="600px">
          </object>
        </div>
      </div>



    );
  }
}

export default withRouter(Commodities);