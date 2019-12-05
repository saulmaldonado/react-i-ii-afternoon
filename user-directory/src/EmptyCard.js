import React, { Component }from 'react'
import './App.css';

export default class EmptyCard extends Component {
    constructor(){
        super()
        this.state = {
            name: {first:'', last:''},
            city: "",
            country: "",
            employer: "",
            title: "",
            favoriteMovies: []

        }

    }

    changeFirstName(value){
        this.setState({name: {first: value, last: this.state.name.last}})
    }
    changeLastName(value){
        this.setState({name: {first: this.state.name.first, last: value}})
    }
    changeCity(value){
        this.setState({city: value})
    }
    changeCountry(value){
        this.setState({country: value})
    }
    changeEmployer(value){
        this.setState({employer: value})
    }
    changeTitle(value){
        this.setState({title: value})
    }
    changeMovies(value){
        this.setState({favoriteMovies: value.split(",") })
    }

    render(){
        
        return(
        <div className="Id-container">
            <div className="order"></div>
            <div className ="name">
                <b>Name:</b>
                <input placeholder="firstname" onChange={(event) => this.changeFirstName(event.target.value)}/>
                <input placeholder ="lastname" onChange={(event) => this.changeLastName(event.target.value)} />
            </div>
                <div className="info">
                    <div className="From">
                        <b>From:</b>
                        <input  placeholder="city" onChange={(event) => this.changeCity(event.target.value)}/>
                        <input  placeholder="country" onChange={(event) => this.changeCountry(event.target.value)}/>
                    </div>
                    <b>Job:</b>
                    <input className="Job" onChange={(event) => this.changeTitle(event.target.value)}/>
                    <b>Employer:</b>
                    <input className="Employer" onChange={(event) => this.changeEmployer(event.target.value)}/> 
                </div>
            <b>Favorite Movies:</b>
            <input className="movies" placeholder="movie1, movie2, movie3 ..." 
            onChange={(event) => this.changeMovies(event.target.value)}/>
            <button className="submit" onClick={() => this.props.submitNewCard(this.state)}>submit</button>
        </div>
        )
    }

}