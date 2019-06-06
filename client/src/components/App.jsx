import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkData: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    Axios({
      method: 'get',
      url: 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=5tzMjp0vTJgSS7TSY2M2oRu2Par3WdpqYcNQEKt4',
    })
      .then(res => {
        console.log(res)
        this.setState({
          parkData: res.data,
        })
      })
      console.log(this.state.parkData)
  }
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App