import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hi, I am new to React App.</h1>
         <Person name="Akash" age="25"/>
         <Person name="abc" age="24">My hobbies: Gamming, Coding</Person>
         <Person name="xyz" age="25"/>
        </header>
      </div>
      );
     // React.createElement('div',null,React.createElement('h1',{className:'App-header'},'Hi, I am new to React App.'))
  }
}

export default App;
