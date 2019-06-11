import React from 'react';
import Axios from 'axios';
import Hawaii from './children/Hawaii.jsx';
import ParkInfo from './children/ParkInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
      currentPark: [],
      clicked: false,
    };
    this.getOnePark = this.getOnePark.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
  }
  componentDidMount() {
    this.getHawaiiParks();
  }
  getHawaiiParks() {
    Axios.get('/parks')
    .then(res => {
        this.setState({
          parkData: res.data,
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
    render() {
      console.log('parks', this.state.parkData)
      return (
      <div>
        <Hawaii
          parkData={this.state.parkData}
          getOnePark={this.getOnePark}
          handleOffClick={this.handleOffClick}
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