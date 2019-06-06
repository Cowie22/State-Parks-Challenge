import React from 'react';
import GoogleMaps from "simple-react-google-maps";

class California extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="CaliMap">
        <GoogleMaps
          apiKey={"AIzaSyBSBuWAjIYxYIqLRmVYltprhS0_mwUO7k8"}
          style={{height: "800px", width: "400"}}
          zoom={6.4}
          center={{lat: 36.7783, lng: -119.4179}}
          markers={{lat: 37.4224764, lng: -122.0842499}} //optional
        />
      </div>
    )
  }
}

export default California