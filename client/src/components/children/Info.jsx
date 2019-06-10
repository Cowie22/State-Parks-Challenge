import React from 'React';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <p>Name:</p>
        <p>Location:</p>
        <p>Contact:</p>
        <p>Operating Hours:</p>
        <p>Fee:</p>
      </div>
    )
  }
}

export default Info