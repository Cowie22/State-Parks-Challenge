import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class Hawaii extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.renderMarkers = this.renderMarkers.bind(this);
  }
  // Function that maps the incoming parks data so that each 'Marker' can be rendered to the page
  renderMarkers() {
    return this.props.filter.map((park, i) => {
      return (
        <Marker
          key={i}
          // On click will go to the data base and get the information for that particular park
          // Accomplished by using the park's id in the database
          // This will then be used in ParkInfo.jsx to display the pertinent information
          onClick={() => this.props.getOnePark(park.id)}
          title={park.name}
          position={{lat: park.latitude, lng: park.longitude}}
          name={park.name}
        />
      )
    })
  }
  render() {
    return (
      <div className="HawaiiMap">
        <Map google={this.props.google}
          // Map centered and points filtered to only include Hawaiian national parks
          initialCenter={{
            lat: 19.9968,
            lng: -157.5828
          }}
          style = {{
            width: '100%',
            height: '100%'
          }}
          zoom={7.4}
          // On map click the info field will disappear
          onClick={() => this.props.handleOffClick()}
        >
        {/* renders markers to the page */}
        {this.renderMarkers()}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBSBuWAjIYxYIqLRmVYltprhS0_mwUO7k8")
})(Hawaii)
