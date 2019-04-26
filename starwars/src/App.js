import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          {this.state.starwarsChars.map(charr=>(
            <div className="card">
            <div className="personName">
               {charr.name}
            </div>
            <ul className="content">

               <li>height: {charr.height} inches</li>
               <li> mass: {charr.mass} Kilograms</li>
               <li>hair color: {charr.hair_color} </li>
              <li>skin color: {charr.skin_color} </li> 
              <li>eye color: {charr.eye_color} </li> 
              <li>birth year: {charr.birth_year} </li> 
              <li>gender: {charr.gender} </li> 

            </ul>
            
            </div>
            
            ))} 
      </div>
    );
  }
}

export default App;
