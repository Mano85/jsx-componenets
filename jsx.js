import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './functional component/functional';
var root= document.getElementById("root");
var rootele=ReactDOM.createRoot(root)

/*const Header=()=>{
    const div= (
        React.createElement("div",{className:"title"},
        React.createElement("h1",{},"react1"),
        React.createElement("h1",{},"react2"),
        React.createElement("h1",{},"react3"),
        
        )
    )
    return div
}
rootele.render(<Heading/>)    t-1*
//using jsx
const NestedHeader=()=>{
    return(
        <div id='title'>
            <h1>head1</h1>
            <h2>head2</h2>
            <h3>head3</h3>
        </div>
    )
  
}
rootele.render(<NestedHeader/>)  task 2*/
