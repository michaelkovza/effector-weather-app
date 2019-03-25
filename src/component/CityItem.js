import * as React from "react";

export class CityItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    const {city, getWeatherForCityFromList} = this.props;
    getWeatherForCityFromList(city.name);
  }

  renderContent(city) {
    if(Object.keys(city).length > 1) {
      return (
        <div>
          <h3>temperature: {city.temp_c}</h3>
          <img src={city.condition.icon} />
        </div>
      )
    }

    return 'loading'
  };


  render() {
    const {city, onDeleteCity} = this.props;

    return (
      <li>
        <button onClick={ () => onDeleteCity(city.name) }>delete</button>
        <h2>{city.name}</h2>
        {this.renderContent(city)}
      </li>
    )
  }
}
