var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();

    // var updates = {};
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      // updates.name = name;
      this.props.onSearch(location);
    }

    // this.props.onNewData(updates);
  },


  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter location name"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
