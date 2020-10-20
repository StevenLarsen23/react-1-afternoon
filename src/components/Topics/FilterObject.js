import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor() {
        super();
        this.state = {
            superHeros: [
                {
                    name: "Batman",
                    secretIdentity: "Bruce Wayne",
                    superPowers: ["Rich", "Genius Level Intellect", "Martial Arts Master"],
                    home: "Gotham"
                },
                {
                    name: "The Flash",
                    secretIdentity: "Barry Allen",
                    superPowers: ["Super Speed", "Intangibility", "Time Travel", "Accelerated Healing"],
                    home: "Central City"
                },
                {
                    name: "Wonder Woman",
                    secretIdentity: "Diana Prince",
                    superPowers: ["Superhuman Strength", "Flight", "Speed"],
                    home: "Themyscira"
                },
                // {
                //     name: "Martian Manhunter",
                //     secretIdentity: "J'onn J'onzz",
                //     superPowers: ["Shapeshifting", "Intangibility", "Invisibility", "Telepathy", "Telekinesis"],
                //     home: "Mars"
                // }
            ],

            userInput: '',
            filteredSuperHeros: []

        }
    }
        handleChange(val) {
            this.setState({userInput: val});
        }
            filterSuperHeros(prop) {
            let superHeros = this.state.superHeros;
            let filteredSuperHeros = [];

            for (let i = 0; i < superHeros.length; i++) {
                if (superHeros[i].hasOwnProperty(prop)) {
                filteredSuperHeros.push(superHeros[i]);
            }
            }
            this.setState({ filteredSuperHeros: filteredSuperHeros});
        }
    

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.superHeros, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterSuperHeros(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredSuperheros, null, 10)}</span>
            </div>
        )
    }
}