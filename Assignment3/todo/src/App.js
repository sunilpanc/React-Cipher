import React, { Component } from 'react';
import './App.css';
import Add from './add';
import Display from './Display'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
class App extends Component {
    state={
      task:[ {id:0,work:"Some Work"}],
      currentChange:''
    }
    handleChange=(event)=>{
      this.setState({...this.state,currentChange:event.target.value});
    }
    handleUpdate =()=>{
      let currentUpdate ={};
      currentUpdate.id = this.state.task.length+1;
      currentUpdate.work = this.state.currentChange;
      let task = [...this.state.task,currentUpdate];
      this.setState({currentChange:'',task});
    }
 
    deleteHandler=(todoIndex)=>{
      const currentState = [...this.state.task];
      currentState.splice(todoIndex,1);
      console.log(currentState);
      this.setState({task:currentState});
    }
  render(){
    return (
      <div className="container app">
         <Add currentChange = {this.handleChange} currentUpdate ={this.handleUpdate} inputValue = {this.state.currentChange}/>
         <Display allValues={this.state.task} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;