import React from 'react';
import './Person.css';

const Person = ({ name, age, deletePersonHandler, children }) => {
  return (
    <div className="Person">
      <p>I'm {name} and I'm {age} years old! {children}</p>
      <button className="btn red" onClick={deletePersonHandler}>Delete</button>
    </div>
  );
}

export default Person;