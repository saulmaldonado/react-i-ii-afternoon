import React, {Component} from 'react'

export default class Next extends Component{
    render(){
        return(
            <div className="nav" onClick={this.props.nextPerson}>Next &#62;</div>
        )
    }
}