import React from 'react';
import '../App.css'

const Smurf = props => {
  return (
    <div className="smurfBox">
      <div className="Smurf">
        <h3 className='pokemonName'><strong>NAME: </strong>{props.name}</h3>
        <strong className='pokemonSize'><strong>SIZE: </strong>{props.height}rem tall</strong>
        <p><strong>HEIGHT: </strong>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

