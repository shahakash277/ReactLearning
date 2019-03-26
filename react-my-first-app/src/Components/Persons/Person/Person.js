import React,{Component} from 'react';
import './person.css';
import Radium from 'radium';

class Person extends Component{
  constructor(props){
    super(props);
    console.log('[Person.js] '+ props)  
  }

  componentWillMount(){
    console.log('[Person.js] inside component will mount')
  }
componentDidMount(){
  console.log('[Person.js] inside component Did mount')

}
  render(){
    console.log('[Person.js] render inside')
    return (
      <div className="Person">
        <button  className="button" onClick={this.props.click}>Delete Me</button>
          <p>My name is {this.props.name} and My age is {this.props.age} years</p>
          <p>{this.props.children}</p>
          <input type='text' onChange={this.props.changed} value={this.props.name}></input>
      </div>
      )
  }
}

export default Radium(Person);