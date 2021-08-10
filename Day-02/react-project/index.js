// we are writing react 
// javascript file 
import React from 'react';
// build componenets 
import ReactDOM from 'react-dom';
// render components on target node 
// step 01// import lib in my code 
// write class and extends React.Component
// JSX
class Hello extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    )
  }
}
ReactDOM.render(<Hello />, document.getElementById("app"));
// mounting component on Target Node
