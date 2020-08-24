import React from 'react';

const add=(props)=>{
    return(
        <div>
            <label htmlFor='task'>Enter your task</label>
            <input type='text' onChange={props.currentChange} value={props.inputValue} id='task'/>
            <button type='button' onClick={props.currentUpdate} className="waves-effect waves-light btn">Add</button>
        </div>
    );
}

export default add;