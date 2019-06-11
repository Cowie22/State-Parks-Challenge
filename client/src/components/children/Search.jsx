import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      activities: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleActivitiesChange = this.handleActivitiesChange.bind(this);
    this.baseState = this.state;
  }
  // Handles change in the search form for park names
  handleChange(event) {
    this.setState({
      search: event.target.value,
    })
    this.props.onChange(event.target.value);
  }
  // Handles change in the search form for activities
  handleActivitiesChange(event) {
    this.setState({
      activities: event.target.value,
    })
    this.props.filterActivities(event.target.value);
  }
  // Handles reset for the search
  handleBaseState() {
    this.setState(this.baseState);
    this.props.filterActivities(this.baseState.activities);
    this.props.onChange(this.baseState.search);
  }
  render() {
    return(
      <div className="search-form">
        <h2>Search Parks</h2>
        <label>Park Name: </label>
        <input type="text" id="search" value={this.state.search} onChange={this.handleChange}></input>
        <label>Activities: </label>
        <input type="text" id="activities" value={this.state.activities} onChange={this.handleActivitiesChange}></input>
        <button onClick={() => this.handleBaseState()}>RESET SEARCH</button>
      </div>
    )
  }
}

export default Search