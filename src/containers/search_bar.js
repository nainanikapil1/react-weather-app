import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          value={this.state.term}
          placeholder="Get a 5 day forecast in your favourite cities "
          className="form-control  "
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button className="btn btn-secondary" >submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}




export default connect(null, mapDispatchToProps)(SearchBar);
