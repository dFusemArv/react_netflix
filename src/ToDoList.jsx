import React from 'react';

const ToDoList=(props)=>{
        return(
            <>
                
                <li><button className='remove_items'>-</button>{props.text}</li><br />

            </>
        );
}

export default ToDoList;