import React, { Component } from 'react';
import './App.css';
import './Person/person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Person: [
      { name: 'Akash Shah', age: 25 },
      { name: 'abc', age: 24 },
      { name: 'xyz', age: 26 }
    ],
    showPerson : false,
    titleName:"Show Person" 
  }

  deletePersonHandler=(index)=>{
    const persons=this.state.Person;
    persons.splice(index,1);
    this.setState({Person:persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      Person: [
        { name: 'Akash', age: 25 },
        { name: event.target.value, age: 24 },
        { name: 'xyz', age: 26 }]
    })
  }
  togglePersonHandler=()=>{
    const doesState=this.state.showPerson;
    this.setState({
      showPerson:!doesState,
      titleName: doesState ? "Show Person": "Hide Person"
     })
  }
  render() {
    let persons =null;
    if(this.state.showPerson){
      persons = (
        <div> 
          {this.state.Person.map((person,index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={()=>this.deletePersonHandler(index)}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I am new to React App.</h1>
          {/*Avoid Using below pattern in calling function instend use this.switchNameHandler.bind(this,'bbb')*/}
          <button onClick={this.togglePersonHandler}>{this.state.titleName}</button>
          {persons}
        </header>
      </div>
    );
    // React.createElement('div',null,React.createElement('h1',{className:'App-header'},'Hi, I am new to React App.'))
  }
}

export default App;
