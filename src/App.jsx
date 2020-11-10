import React, { useState } from 'react';

const App=()=>{
    const stateBG=useState(()=>{
        //console.log('red');
        return 'red';
    });
    const [currStateBG,updateStateBG]=stateBG;

    const stateName=useState(()=>{
        return 'First!';
    });

    const [currName,updateName]=stateName;
    const bgChange=()=>{
        updateName('First!');
        updateStateBG('red');
    };

    const nameChange=()=>{
        updateName('Second!');
        
        updateStateBG('cyan');
    };
    return(
        <>
            <div style={{backgroundColor:currStateBG}}>
                <button onMouseOver={bgChange} onMouseOut={nameChange}>{currName}</button>
            </div>
        </>
    );
}


export default App;