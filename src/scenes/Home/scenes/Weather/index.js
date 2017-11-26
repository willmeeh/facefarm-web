import React, { Component } from 'react';
import Skycons from 'react-skycons'
import { withRouter } from 'react-router-dom';

import moment from 'moment';
import locale_br from "moment/locale/pt-br";

import * as weatherApi from './api';

class WeatherForecast extends Component {

  state = {
    jsonWeather: {},
    endereco: 'Santa Cruz do Sul, RS, Brasil'
  };

  handleLoadWeather = () => {
    weatherApi.getWeather({
      endereco: this.state.endereco ? this.state.endereco : 'Santa Cruz do Sul, RS, Brasil'
    }).then((jsonWeather) => {
      this.setState({ jsonWeather: jsonWeather.body });
      console.log(this.state.jsonWeather.daily.data);
    });
  }

  handleChangeBase = (event) => {
    this.setState({ endereco: event.target.value });
  }

  componentDidMount() {
    moment.updateLocale("pt-br", locale_br);
    this.handleLoadWeather();
  }

  render() {
    return (
      <div>
        <h1>Temperatura</h1>



        <div className="form-group">
          <label>Buscar temperatura na cidade, estado país:</label>
          <input type="text" className="form-control" defaultValue={this.state.endereco} onChange={this.handleChangeBase} />
        </div>

        <button type="button"
          className="btn btn-success pull-right"
          onClick={this.handleLoadWeather}>
          Buscar
        </button>
        <div className="icon-weather">
          {(this.state.jsonWeather.currently !== undefined) ?
            <div>
              <div className="row">
                <div className="col-md-3">
                  <h3>{((this.state.jsonWeather.currently.temperature - 32) * 5 / 9).toFixed(2) + "ºC"}</h3>
                </div>
                <div className="col-md-5 pull-rigth">
                  <h3>Chance de chuva: {(this.state.jsonWeather.currently.precipProbability * 100) + "%"}</h3>
                </div>
                <div className="col-lg-10">
                  <Skycons
                    color='black'
                    icon={this.state.jsonWeather.currently.icon.replace(/-/g, '_').toUpperCase()}
                    autoplay={true}
                  />
                </div>
              </div>


              {
                this.state.jsonWeather.daily.data.map((item) =>
                  <div key={item.time}>
                    <h2>{moment.unix(item.time).format("DD/MM/YYYY")}</h2>
                    <div className="row">
                      <div className="col-md-5">
                        <h5> Temperatura:  {(((item.temperatureHigh + item.temperatureLow) / 2 - 32) * 5 / 9).toFixed(2) + "ºC"}</h5>
                        <h5> Chance de chuva: {(item.precipProbability * 100) + "%"}</h5>
                        <h5> Sumário: {item.summary}</h5>

                        <div className="col-md-5">
                          <Skycons
                            color='black'
                            icon={item.icon.replace(/-/g, '_').toUpperCase()}
                            autoplay={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }


            </div>

            : <h1>Carregando ... </h1>
          }
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherForecast);