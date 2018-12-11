import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Hobbies: {props.hobbies.join(', ')}</h4>
    </li>
  );  
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

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
      
    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
         key={index}
         name={instructor.name}
         hobbies={instructor.hobbies}
      />
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
