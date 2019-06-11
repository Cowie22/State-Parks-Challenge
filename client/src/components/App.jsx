import React from 'react';
import Axios from 'axios';
import Hawaii from './children/Hawaii.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
      currentPark: [],
    };
    this.getOnePark = this.getOnePark.bind(this)
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
        }, () => console.log('one park', this.state.currentPark))
      });
    }
    render() {
      console.log('parks', this.state.parkData)
      return (
      <div>
        <Hawaii
          parkData={this.state.parkData}
          getOnePark={this.getOnePark}
        />
      </div>
    )
  }
}

export default App