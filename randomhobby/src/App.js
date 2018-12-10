import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        },
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es6']
        },
      ]
    };

    //helper function to create a random number
    const randomNum = (num) => {
      return Math.floor(Math.random() * num);
    };

    setTimeout(() => {  
      //make a copy of the instructors array    
      const newInstructors = this.state.instructors.slice();
      
      //random indexes that need to be changed
      const instructorIndex = randomNum(newInstructors.length);
      const hobbyIndex = randomNum(newInstructors[instructorIndex].hobbies.length);
      
      const instructors = this.state.instructors.map((inst, i) => {
        if (i === instructorIndex) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst, hobbies
          }
        }
        return inst;
      });
      this.setState({instructors});
      /*
      //Another Way
      const instructors = this.state.instructors.map((inst, index) => (
        index === instructorIndex? {
          ...inst, 
          hobbies:[...inst.hobbies.slice(0, hobbyIndex).concat(inst.hobbies.slice(hobbyIndex + 1, inst.hobbies.length))]
        } : inst
      ));
      this.setState({instructors});
      */
      /*
      //Another Way
      //make a copy of the instructor object that needs to be modified
      newInstructors[instructorIndex] = Object.assign({}, newInstructors[instructorIndex]);
      //make a copy of the hobbies array that needs to be modified
      newInstructors[instructorIndex].hobbies = newInstructors[instructorIndex].hobbies.slice();
      //maske the change
      newInstructors[instructorIndex].hobbies.splice(hobbyIndex, 1);

      //set the state
      this.setState({instructors: newInstructors});
      */
    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(', ')}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
