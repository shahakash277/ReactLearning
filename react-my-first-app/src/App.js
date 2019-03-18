import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    Person:[
      {name:'Akash Shah',age:25},
      {name:'abc',age:24},
      {name:'xyz',age:26}
    ]
  }
   styles = {
    width: '150px',
    height: '50px',
    
  };
  switchNameHandler =(newName)=>{
    console.log('was Clicked');
   //Don't do this this will not change value
   // this.state.Person[0].name='pqr'; 
   this.setState({Person:[   
     {name:newName,age:25},
     {name:'abc',age:24},
     {name:'xyz',age:26}]})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hi, I am new to React App.</h1>
         <button style={this.styles} onClick={()=> this.switchNameHandler('aaa')}>Swich Name</button>
         <Person 
            name={this.state.Person[0].name} 
            age={this.state.Person[0].age}
            />
         <Person 
            name={this.state.Person[1].name} 
            age={this.state.Person[1].age}
            click={this.switchNameHandler.bind(this,'bbb')}>My hobbies: Gamming, Coding</Person>
         <Person  
            name={this.state.Person[2].name} 
            age={this.state.Person[2].age}
            />
        </header>
      </div>
      );
     // React.createElement('div',null,React.createElement('h1',{className:'App-header'},'Hi, I am new to React App.'))
  }
}

export default App;
