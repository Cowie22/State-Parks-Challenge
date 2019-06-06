import React from 'react';
import GoogleMaps from "simple-react-google-maps";

class California extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // The following is utilized to filter the longitudes and latitudes from the national parks api
    // So that they match the array of objects needed for the google maps import.

    // Filters longs and lats into a tuple of [lat, long]
    let longLat = this.props.parkData.map(parks => parks.latLong.split(','));
    let latLongFiltered = [];
    for (let i = 0; i < longLat.length; i++) {
      // Slice off the leading 'lat:' or 'long:' because this is the part of the data that needs
      // To be fixed in order to match the google map import
      let latNums = longLat[i][0] ? longLat[i][0].slice(4) : null;
      let longNums = longLat[i][1] ? longLat[i][1].slice(6) : null;
      // Push the newly made object, with the corrected 'lat:' or 'lng:' and change
      // The values from strings to numbers
      latLongFiltered.push({lat: +latNums, lng: +longNums});
    }
    return (
      // Conditional render because the api data takes some time to receive
      // I don't want the image to show until the data is received so the user
      // Is not confused when the map does not have markers or interactivity
      this.props.dataReceived ?
      <div className="CaliMap">
        <GoogleMaps
          // Map centered and points filtered to only include california national parks
          apiKey={"AIzaSyBSBuWAjIYxYIqLRmVYltprhS0_mwUO7k8"}
          style={{height: "800px", width: "400"}}
          zoom={6.2}
          center={{lat: 36.7783, lng: -119.4179}}
          // Takes in the latLongFiltered array from above and plots their points on the map
          markers={latLongFiltered}
        />
      </div>
      :
      <div>
        Loading data...
      </div>
    )
  }
}

export default California