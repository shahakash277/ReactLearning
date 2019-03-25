import React, { Component } from 'react';
import './App.css';
import '../Components/Persons/Person/person.css';
import Radium,{StyleRoot} from 'radium';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/cockpit'
class App extends Component {
  state = {
    Person: [
      { id:'1', name: 'Akash Shah', age: 25 },
      { id:'2', name: 'abc', age: 24 },
      { id:'3', name: 'xyz', age: 26 }
    ],
    showPerson : false,
    titleName:"Show Person" 
  }

  deletePersonHandler=(index)=>{
    //don't use const persons=this.state.Person because of reference is shared
    //below line create a copy of object
    const persons=[...this.state.Person];
    persons.splice(index,1);
    this.setState({Person:persons});
  }

  nameChangedHandler = (event,id) => {
    const personIndex= this.state.Person.findIndex(p=> p.id===id);
    const person= {...this.state.Person[personIndex]};
    person.name=event.target.value
    
    const persons=[...this.state.Person];
    persons[personIndex]=person;
    this.setState({
      Person: persons
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
   
    return (
      //when you use media query that time styleRoot is important
      <StyleRoot>
        <div className="App">
          <header className="App-header">
          <Cockpit click={this.togglePersonHandler} titleName={this.state.titleName} />
          {this.state.showPerson ?
            <Persons
              persons={this.state.Person}
              click={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            /> : null}
        </header>
        </div>

      </StyleRoot>
    );
    // React.createElement('div',null,React.createElement('h1',{className:'App-header'},'Hi, I am new to React App.'))
  }
}

export default Radium(App);