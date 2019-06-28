import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Hi from './components/hi'

import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
// import Smurfs from './components/Smurfs';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
    // console.log(props)
  }

  // state = {
  //   smurfs: [],
  // };




componentDidMount(){
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      // console.log('this here---', response.data)
      this.setState({
        smurfs: response.data
      })
    })
    .catch(error => console.log('nothing is working... ', error))
}







submitSmurf = addedObject => {

  console.log(addedObject)

  axios
    .post('http://localhost:3333/smurfs', addedObject)
    .then(response => {
      console.log('log me---', response)
      this.setState({
        smurfs: response.data
      })
    })
    .catch(error => console.log('you done broke it again...', error))
}



  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.





  render() {
    return (
      <Router>
        <div className="App">

          <nav className='NavBar'>
            <NavLink exact className="nav-link" to="/">Home</NavLink>
            <NavLink exact className="nav-link" to="/smurf-form">This goes somewhere...</NavLink>
          </nav>



          <br/>

          
          
          <div className='linkNav'>
            <Link exact className="thisLink" to="/">Hide truth</Link>
            <br/>
            <Link exact className="thisLink" to="/smurf-form">Reveal truth</Link>
          </div>




          <SmurfForm 
          submitSmurf={this.submitSmurf}
          />



          <div className='smurfBox'>

            <h1>Smurf Village</h1>

            {this.state.smurfs.map(newSmerf => (
              <div className="Smurf" key={newSmerf.id}>

                <h3 className='pokemonName'><strong>NAME: </strong>{newSmerf.name}</h3>

                <strong className='pokemonSize'><strong>SIZE: </strong>{newSmerf.height}rem tall</strong>

                <p><strong>HEIGHT: </strong>{newSmerf.age} smurf years old</p>
              </div>
            ))}

          </div>



            <Route exact path="/" />
            <Route exact path='/smurf-form' component={Hi} />




          {/* <Smurfs smurfs={this.state.smurfs} /> */}

          {/* <Smurfs smurfs={this.state.smurfs.map(newSmerf => (

            <div key={newSmerf.id}>
              <h3>{newSmerf.name}</h3>
              <strong>{newSmerf.height} tall</strong>
              <p>{newSmerf.age} smurf years old</p>
            </div>

            ))} /> */}

        </div>
      </Router>
    );
  }
}

export default App;
