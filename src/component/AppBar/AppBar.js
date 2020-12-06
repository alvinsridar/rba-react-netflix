import React from 'react'

//function component
export default function AppBar(props) {
    return (
      <div className="App-Bar">
        {props.children}
      </div>  
    );
}