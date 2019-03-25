import React from 'react'
import Person from './Person/Person'
import './Person/person.css'
const persons = (props) => props.persons.map((person, index) => (
    <Person
        name={person.name}
        age={person.age}
        click={() => props.click(index)}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
    />
));

export default persons;