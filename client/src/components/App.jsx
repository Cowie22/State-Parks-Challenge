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

  }
  render() {
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