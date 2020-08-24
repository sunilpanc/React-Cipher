import React, { Component } from 'react';
import './App.css';
import Todo from './todo';

class App extends Component {
    state={
      task:[ {id:1,work:"Some Work"}],
      currentChange:''
    }
    handleChange=(event)=>{
      let currentChange = event.target.value;
      this.setState({currentChange});
    }
    handleUpdate =()=>{
      let currentUpdate ={};
      currentUpdate.id = this.state.task.length+1;
      currentUpdate.work = this.state.currentChange;
      
      let task = [...this.state.task,currentUpdate];
      this.setState({task});
      console.log(this.state.task)
    }
 
  render(){
    return (
      <div className="App">
         <Todo currentChange = {(event)=>this.handleChange(event)} currentUpdate ={this.handleUpdate}/>
          
      </div>
    );
  }
}

export default App;
