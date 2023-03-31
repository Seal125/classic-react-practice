import '../styles/Form.css';
import React from 'react';
import FormResult from './FormResult';

class Form extends React.Component {
  render() {
    const states = { name: '' };

    // I would have added an onChange handler here, but I'm currently not sure how to pass the event

    return (
      <>
        <form className='form'>
          <label htmlFor='name'>Name</label>
          <input
            id='nameInput'
            onChange={(event) => this.setState({ name: event.target.value })}
            type='text'
            alt='Name input'
            name='name'></input>
        </form>

        <FormResult name={states.name} />
      </>
    );
  }
}

export default Form;
