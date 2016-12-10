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
      <h3>About</h3>
      <p>Welcome to the About page!</p>
    </div>

  );
};


module.exports = About;
