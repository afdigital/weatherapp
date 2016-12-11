var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=1316e653dd8102e5d2fd2b369be46e99';

// 1316e653dd8102e5d2fd2b369be46e99

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    // }, function (res) {
    //   throw new Error(res.data.message);
    // });
    }, function (err) {
      // throw new Error(err.response.data.message);
      throw new Error('Unable to fetch weather for that location. Please search for another city.');
    });
  }
}
