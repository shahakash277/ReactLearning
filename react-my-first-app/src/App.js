import React, { Component } from 'react';
import './App.css';
import './Person/person.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'blue',
      },
      '@media (min-width: 700px)':{
        width:'450px'
      }
    };
    let persons =null;
    if(this.state.showPerson){
      style[':hover'] = {
        backgroundColor: 'red',
        color: 'black',
      }
      persons = (
        <div>
          {this.state.Person.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              style={style}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
            </ErrorBoundary>
          })}
        </div>
      );
    }
    // const random=Math.random();
    // if( random >0.7){
    //   throw new Error("someting wrong");
    // }
    return (
      //when you use media query that time styleRoot is important
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <h1>Hi, I am new to React App.</h1>
            {/*Avoid Using below pattern in calling function instend use this.switchNameHandler.bind(this,'bbb')*/}
            <button onClick={this.togglePersonHandler}>{this.state.titleName}</button>
            {persons}
          </header>
        </div>
      </StyleRoot>
    );
    // React.createElement('div',null,React.createElement('h1',{className:'App-header'},'Hi, I am new to React App.'))
  }
}

export default Radium(App);