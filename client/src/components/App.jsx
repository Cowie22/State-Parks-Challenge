import React from 'react';
import Axios from 'axios';
import California from './children/California.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
      dataReceived: false,
    };
  }
  componentWillMount() {
    this.getCaliforniaParks();
    console.log('data', this.state.parkData)
  }
  getCaliforniaParks() {
    Axios({
      method: 'get',
      url: 'https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=5tzMjp0vTJgSS7TSY2M2oRu2Par3WdpqYcNQEKt4',
    })
      .then(res => {
        this.setState({
          parkData: res.data.data,
          dataReceived: true,
        })
      })
      console.log('data', this.state.parkData)
  }
  render() {
    console.log('data1', this.state.parkData)
    return (
      <div>
        <California
          parkData={this.state.parkData}
          dataReceived={this.state.dataReceived}
        />
      </div>
    )
  }
}

export default App