import React, { Component } from 'react';
import '../App.css'



class SmurfForm extends Component {
  state = {
      name: '',
      age: '',
      height: ''
    };
    

    handleInputChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };





  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    // console.log(event)
    this.props.submitSmurf(this.state)
    // console.log(this.state)
  }




  render() {
    return (
      <div className="inputSmurf">
        <form  className="SmurfForm" onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
