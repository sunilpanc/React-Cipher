import React, { Component } from 'react';
import 'materialize-css';

class Display extends Component{
    render(){
        return(
            <div className='row'>
                <div className='col s12 m6'>
                {
                this.props.allValues.map((element,index) => {
                    return (
                        <div className='card blue-grey darken-1'>
                            <div class="card-content white-text"><p className='card-title'>{element.work}</p></div>
                            <div className="card-action">
                                <button type='text' onClick={(index)=>this.props.deleteHandler}>Delete</button>
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