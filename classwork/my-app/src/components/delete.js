import React,{Component} from 'react';

class Delete extends Component{
deleteHandler=()=>{
let courseDetails = [...this.props.courseDetails];
courseDetails.forEach(element =>{
    if(this.props.id !== element.id){
        return element;
    }    
})
this.props.setState({
    courseDetails: courseDetails
})
}
render(){
    return(
        <div>
            <button type='Button' onClick={this.deleteHandler}>Delete</button>
        </div>
    );
}
    
}

export default Delete;