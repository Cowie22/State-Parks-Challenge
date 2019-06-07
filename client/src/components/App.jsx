import React from 'react';
import Axios from 'axios';
import Hawaii from './children/Hawaii.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
      dataReceived: false,
      Name: '',
      Location: '',
      Contact: '',
      OperatingHours: '',
      Fee: '',
    };
    this.handleParkInfo = this.handleParkInfo.bind(this);
  }
  componentWillMount() {
    this.getHawaiiParks();
  }
  getHawaiiParks() {
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
  handleParkInfo(event) {
    this.setState({
      Name: event.target.name,
      Location: event.target.location,
      Contact: event.target.contact,
      OperatingHours: event.target.hours,
      Fee: event.target.fee,
    })
  }
  render() {
    return (
      <div>
        <Hawaii
          parkData={this.state.parkData}
          dataReceived={this.state.dataReceived}
        />
      </div>
    )
  }
}

export default App