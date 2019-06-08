import React from 'react';
import Axios from 'axios';
import Hawaii from './children/Hawaii.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
    };
  }
  componentDidMount() {
    this.getHawaiiParks();
  }
  getHawaiiParks() {
    Axios.get('/parks')
    .then(res => {
      console.log('data', res.data)
        this.setState({
          parkData: res.data,
        });
      });
    }
    render() {
      console.log('parks', this.state.parkData)
      return (
      <div>
        <Hawaii
          parkData={this.state.parkData}
        />
      </div>
    )
  }
}

export default App