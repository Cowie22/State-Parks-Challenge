import React from 'React';

class ParkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // Simple destructure so that you don't have to write this.props
    const { clicked, currentPark } = this.props;
    return (
      // Conditional render so that park info is only displayed when a 'Marker' is clicked
      // And disappears when the map itself is clicked
      clicked ?
      <div className="ParkInfo">
        <p>Name: {' '} {currentPark[0].name} </p>
        <p>Location: {' '} {currentPark[0].location}</p>
        <p>Activities: {' '} {currentPark[0].activities}</p>
        <p>Operating Hours: {' '} {currentPark[0].hours}</p>
        <p>Fee: {' '} {currentPark[0].price}</p>
      </div>
      :
      <div>

      </div>
    )
  }
}

export default ParkInfo