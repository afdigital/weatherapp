var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>It's <b>{temp}</b> degrees celcius in <b>{location}</b>.</p>
    </div>
  );
}


module.exports = WeatherMessage;
