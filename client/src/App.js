import './App.css';
import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <main className='App'>
          <h1>Hello there!</h1>
          <h2>
            Here's a form that you can fill out, it won't do anything though 🙂
          </h2>

          <Form />
        </main>
      </>
    );
  }
}

export default App;
