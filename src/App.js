import logo from './logo.svg';
import './App.css';
import Box from './Box.js';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <Box />
      </div>
    );
  }
}

export default App;
