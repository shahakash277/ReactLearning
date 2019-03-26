import React,{Component} from 'react'
import Person from './Person/Person'
import './Person/person.css'

class Persons extends Component{
    constructor(props){
        super(props);
        console.log('[Persons.js] '+ props)  
      }
    
      componentWillMount(){
        console.log('[Persons.js] inside component will mount')
      }
    componentDidMount(){
      console.log('[Persons.js] inside component Did mount')
    
    }
    render() {
        console.log('[Persons.js] render inside')
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.click(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;