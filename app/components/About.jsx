var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// Alternate method 1
// var About = function (props) {
//   return (
//     <h3>About Component</h3>
//   );
// };

// Alternate method 2
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built using Facebook's React.js framework.</p>
      <p>Some of the tools used include:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the JS framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - used for searching weather data by location.
        </li>
      </ul>
    </div>

  );
};


module.exports = About;
