import React from 'react'

const person=(props)=>{
    return (
        <div>
            <p>My name is {props.name} and My age is {props.age} years</p>
            <p>{props.children}</p>
        </div>
        )
}

export default person;