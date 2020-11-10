import React, { useState } from 'react';

const App=()=>{
    let time=new Date().toLocaleTimeString();

    const hook=useState(()=>time);
    const [currTime,setTime]=hook;

    const RefreshTime=()=>{
        time=new Date().toLocaleTimeString();
        setTime(time);
    }

    setInterval(RefreshTime,1000);
    return(
        <>
            <h1>{currTime}</h1>
        </>
        

    );
}

export default App;