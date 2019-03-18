import React from 'react'

const person=(props)=>{
    return (
        <div>
          <button onClick={props.click}>Change Value</button>
            <p>My name is {props.name} and My age is {props.age} years</p>
            <p>{props.children}</p>
        </div>
        )
}

export default person;