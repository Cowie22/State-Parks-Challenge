import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // Handles change in the search form
  handleChange(event) {
    this.setState({
      search: event.target.value
    })
    this.props.onChange(event.target.value)
  }
  render() {
    return(
      <div className="search-form">
        <h2>Search Parks</h2>
        <label>Park Name: </label>
        <input type="text" id="search" value={this.state.search} onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default Search