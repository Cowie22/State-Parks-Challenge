import React from 'react';
import GoogleMaps from "simple-react-google-maps";

class Hawaii extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // Filters parks data for longitude and latitude in order to
    // Display state park markers on the map
    let parksArr = [];
    this.props.parkData.map(park => {
      parksArr.push({
        lat: park.latitude,
        lng: park.longitude
      })
    });
    return (
      <div className="CaliMap">
        <GoogleMaps
          // Map centered and points filtered to only include Hawaiian national parks
          apiKey={"AIzaSyBSBuWAjIYxYIqLRmVYltprhS0_mwUO7k8"}
          style={{height: "800px", width: "400"}}
          zoom={7.4}
          center={{lat: 19.9968, lng: -157.5828}}
          // Takes in the parksArr array from above and plots their points on the map
          markers={parksArr}
        />
      </div>
    )
  }
}

export default Hawaii