import React, {Component} from 'react'

export default class Previous extends Component{
    render(){
        return(
            <div className="nav" onClick={this.props.previousPerson}>&#60;  Previous</div>
        )
    }
}