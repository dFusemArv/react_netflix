import React, { useState } from 'react';
//import ReactDom from 'react-dom';

const App=()=>{
    const state=useState({
       fname: '',
       lname: '',
       mail: '',
       mobile: '',
    });

    const [valuee,updateValue]=state;

    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        const value=event.target.value;
        const name=event.target.name;
        
        updateValue((prevValue)=>{
            //console.log(prevValue);
            if(name==='fname'){
                return{
                fname: value,
                lname:  prevValue.lname,
                mail:  prevValue.mail,
                mobile:  prevValue.mobile,
            };
                
            }else if(name==='lname'){
                return{
                    fname: prevValue.fname,
                lname:  value,
                mail:  prevValue.mail,
                mobile:  prevValue.mobile,
                };
            }else if(name==='mail'){
                return{
                    fname: prevValue.fname,
                lname:  prevValue.lname,
                mail:  value,
                mobile:  prevValue.mobile,
                };
            }else if(name==='mobile'){
                return{
                    fname: prevValue.fname,
                lname:  prevValue.lname,
                mail:  prevValue.mail,
                mobile:  value,
                };
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

            <input type='text' placeholder='Enter your first name here' 
                name='fname' onChange={inputEvent} /><br /><br />
            <input type='text' placeholder='Enter your last name here' 
                name='lname' onChange={inputEvent} /><br /><br />
            <input type='email' name='mail' 
                onChange={inputEvent} /><br /><br />
            <input type='text' name='mobile' 
                onChange={inputEvent} /><br /><br /> 
            <button>Submit</button>
        </form>
        </>
    );
}

export default App;