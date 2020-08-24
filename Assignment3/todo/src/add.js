import React from 'react';

const add=(props)=>{
    return(
        <div>
            <input type='text' onChange={props.currentChange} value={props.inputValue}/>
            <button type='button' onClick={props.currentUpdate}>Add</button>
        </div>
    );
}

export default add;