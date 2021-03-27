import {Component, useState} from "react";

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       year: 1987,
//       age: 33
//     };
//   }

//   handleClick =()=> {
//     let newAge = this.state.age + 1
//     this.setState({age: newAge})
//   }

//   render(){
//     return(
//       <div>
//         <h2>Frankie was born in {this.state.year}. He is {this.state.age} years old.</h2>
//       <button onClick={this.handleClick}>Click Me!</button>
//       </div>
//     );
//   }
// }

function App() {
  const [state, setState] = useState({year: 1987, age: 33})
  const handleClick =()=> {
    let newAge = state.age + 1
    setState({age: newAge});
  }

  return(
    <div>
      <h2>Frankie was born in {state.year}. He is {state.age} years old.</h2>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;