import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App=()=>{
    const [item,setItem]=useState('');
    const [arr,setArr]=useState([]);
    const AddItems=(event)=>{
        setItem(()=>{
            return event.target.value;
        })
    };

    const ItemsOnAdd=()=>{
        setArr(()=>{
            return [...arr,item];
        });
        setItem('');
    };

    
    return(
        <>
            <div className='outer_div'>
                <div className='inner_div'>
                    <h1>To Do list</h1>
                    <input type='text' placeholder='Add a new item' 
                    name='add_item' onChange={AddItems} value={item} />
                    <button className='add_button' onClick={ItemsOnAdd}>+</button>
                    <ol>
                        {arr.map((arr_items,index)=>{
                            return(
                                <ToDoList 
                                text={arr_items}

                            />
                            );
                            
                        })}   
                    </ol>
                </div>
            </div>
        </>
    );
}
export default App;