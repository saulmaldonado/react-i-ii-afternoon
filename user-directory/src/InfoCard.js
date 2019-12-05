import React, { Component }from 'react'
import './App.css';

export default class InfoCard extends Component {
    constructor(){
        super()

    }
    render(){
        return(

            <div className="Id-container">
                <div className="order">{`${this.props.personIndex}/${this.props.dataLength}`}</div>
                <div className="name">{`${this.props.personId.name.first} ${this.props.personId.name.last}`}</div>
                <div className="info">
                    <div className="From"> <b>From:</b> {` ${this.props.personId.city}, ${this.props.personId.country}`}</div>
                    <div className="Job"> <b>Job Title:</b>{` ${this.props.personId.title}`}</div>
                    <div className="Employer"> <b>Employer:</b>{` ${this.props.personId.employer}`}</div>
                </div>
                <div className="movies"><b>Favorite Movies:</b>
                    <ul>
                        <li>
                            <ol>
                            {this.props.personId.favoriteMovies.map((value, index) => {
                                return(
                                    <li key={index}>{value}</li>
                                )
                            })}
                            </ol>
                        </li>
                    </ul>
                 </div>
            </div>
        )
    }
}