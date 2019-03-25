import React from 'react'
 
const cockpit=(props)=>(
    <div>
        <h1>Hi, I am new to React App.</h1>
        <button onClick={props.click}>{props.titleName}</button>
    </div>
    );


export default cockpit;