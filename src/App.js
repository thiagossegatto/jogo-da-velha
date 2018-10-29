import React, { Component } from "react";
import Velha from './components/Velha';
import Memoria from './components/Memoria';
import Forca from './components/Forca';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Forca />
      </div>
    );
  }
}

export default App;
