import React, { useState } from 'react';
//import ReactDom from 'react-dom';

const App=()=>{
    const state=useState({
       fname: '',
       lname: '',
       mail: '',
       mobile: '',
       remarks: '',
    });

    const [valuee,updateValue]=state;

    const inputEvent=(event)=>{
        //console.log(event.target.value);
        //console.log(event.target.name);
        const value=event.target.value;
        const name=event.target.name;
        
        updateValue((prevValue)=>{
            //console.log(prevValue);
            return{
                ...prevValue,
                [name]:value,
                //in name's value value is assigned
                /*example: const animalSounds = {cat: 'meow', dog: 'bark'};

                    const animal = 'lion';

                    const sound = 'roar';

                    {...animalSounds, [animal]: sound};
                    The result will be

                    {cat: 'meow', dog: 'bark', lion: 'roar'};
            */
           }
        });

    }


    const onSubmits=(event)=>{
        event.preventDefault();
        alert('form submitted!');
    }
    return(
        <>
        <form onSubmit={onSubmits}>
            <h1>Hello {valuee.fname} {valuee.lname}</h1>
            <h2>{valuee.mail}</h2>
            <h3>{valuee.mobile}</h3>
            <p>{valuee.remarks}</p>

            <input type='text' placeholder='Enter your first name here' 
                name='fname' onChange={inputEvent} /><br /><br />
            <input type='text' placeholder='Enter your last name here' 
                name='lname' onChange={inputEvent} /><br /><br />
            <input type='email' name='mail' 
                onChange={inputEvent} /><br /><br />
            <input type='text' name='mobile' 
                onChange={inputEvent} /><br /><br /> 

            <input type='text' placeholder='Enter your remarks here' 
                name='remarks' onChange={inputEvent} /><br /><br />
            <button>Submit</button>
        </form>
        </>
    );
}

export default App;