import React, { Component } from 'react'

export default class Delete extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="buttons" onClick={this.props.deletePerson}>Delete</div>
        )
    }
}