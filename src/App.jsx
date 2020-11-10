import React, { useState } from 'react';

const App=(props)=>{
    const stateName=useState(()=>{
        return '';
    });

    const [fullName,setFullName]=useState();
    const [currName,setName]=stateName;

    const InputHandler=(event)=>{
        setName(event.target.value);
    };

    const submission=()=>{
        setFullName(currName);
    };

    
    return(
        <>
            <h1>Hello! {fullName}</h1>
            <input type='text' placeholder='Enter your name' onChange={InputHandler} value={currName} />
            <br />
            <button onClick={submission}>Submit</button>
        </>
    );
}

export default App;