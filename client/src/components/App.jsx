import React from 'react';
import Axios from 'axios';
import Search from './children/Search.jsx';
import Hawaii from './children/Hawaii.jsx';
import ParkInfo from './children/ParkInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
      currentPark: [],
      filter: [],
      clicked: false,
    };
    this.getOnePark = this.getOnePark.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
    this.filterParks = this.filterParks.bind(this);
  }
  componentDidMount() {
    this.getHawaiiParks();
  }
  getHawaiiParks() {
    Axios.get('/parks')
    .then(res => {
        this.setState({
          parkData: res.data,
          filter: res.data,
        });
      });
    }
    getOnePark(id) {
      Axios.get(`/parks/${id}`)
      .then(res => {
        this.setState({
          currentPark: res.data,
          clicked: true,
        }, () => console.log('one park', this.state.currentPark))
      });
    }
    // Function to make the info div disappear on map click
    handleOffClick() {
      this.setState({
        clicked: false,
      })
    }
    // Function to filter the data and return markers that match the name in the search bar
    filterParks(parkFilter) {
      let filteredParks = this.state.parkData;
      filteredParks = filteredParks.filter((park) => {
        let parkName = park.name.toLowerCase();
        return parkName.indexOf(
          parkFilter.toLowerCase()) !== -1
      })
      this.setState({
        filter: filteredParks,
      })
    }
    render() {
      console.log('parks', this.state.parkData)
      return (
      <div>
        <Search
          filter={this.state.filter}
          onChange={this.filterParks}
        />
        <Hawaii
          parkData={this.state.parkData}
          getOnePark={this.getOnePark}
          handleOffClick={this.handleOffClick}
          filter={this.state.filter}
        />
        <ParkInfo
          clicked={this.state.clicked}
          currentPark={this.state.currentPark}
        />
      </div>
    )
  }
}

export default App