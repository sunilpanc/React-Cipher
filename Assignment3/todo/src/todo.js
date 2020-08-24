import React, { Component } from 'react';

class Todo extends Component{
render(){
    return(
        <div>
            <input type='text' onMouseLeave={this.props.currentChange}/>
            <button type='button' onClick={this.props.currentUpdate}>Add</button>
        </div>
    );
}
}

export default Todo;