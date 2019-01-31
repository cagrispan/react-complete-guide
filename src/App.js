import React, { Component } from 'react';
import './App.scss';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Carlos', age: 31},
      { id: 2, name: 'Gabi', age: 27, children: 'Carlos\' girlfriend!'},
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState(prevState => ({ showPersons: !prevState.showPersons }));
  }

  deletePersonHandler = (deletedId) => {
    const { persons } = this.state;
    const newPersons = persons.filter(({ id }) => id !== deletedId)

    this.setState({ persons: newPersons });
  }

  render() {
    const btnColor = this.state.showPersons ? 'red' : 'green';

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          className={`btn btn-${btnColor}`}
          onClick={this.togglePersonsHandler}>Toggle List</button>
        {this.state.showPersons && this.state.persons
          .map(({ id, name, age, children }) => (
            <Person
              key={id}
              name={name}
              age={age}
              deletePersonHandler={this.deletePersonHandler.bind(this, id)}
            >{children}</Person>
          ))}
      </div>
    );
  }
}

export default App;
