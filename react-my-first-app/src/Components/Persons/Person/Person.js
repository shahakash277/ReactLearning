import React from 'react';
import './person.css';
import Radium from 'radium';

const person=(props)=>{
    return (
        <div className="Person">
          <button onClick={props.click}>Delete Me</button>
            <p>My name is {props.name} and My age is {props.age} years</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
        )
}

export default Radium(person);