import React, { Component } from 'react';

class Display extends Component{
    render(){
        return(
            <div className='row'>
                <div className='col s12'>
                {
                this.props.allValues.map((element,index) => {
                    return (
                        <div className='card blue-grey darken-1' key={element.id}>
                            <div className="card-content white-text"><p className='card-title'>{element.work}</p></div>
                            <div className="card-action">
                                <button type='text' onClick={()=>this.props.editHandler(index)} className="waves-effect waves-light btn mr">Edit</button>
                                <button type='text' onClick={()=>this.props.deleteHandler(index)} className="waves-effect waves-light btn">Delete</button>
                            </div>
                        </div>
                    );
                        
                })
                }
                </div> 
            </div>
        );
    }
}
export default Display;