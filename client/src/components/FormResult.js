import React from 'react';

class FormResult extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <>
        <h2>Looks like your name is {name}...very nice 😊</h2>
      </>
    );
  }
}

export default FormResult;
