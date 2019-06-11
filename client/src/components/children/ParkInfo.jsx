import React from 'React';

const ParkInfo = (props) => {
  const { clicked, currentPark } = props;
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


export default ParkInfo