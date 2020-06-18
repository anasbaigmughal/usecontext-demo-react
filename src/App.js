import React from 'react';
import './App.css';
import Parent from './Parent'
import ValueContext from './ValueContext';

//</ValueContext.Provider> is wrapper
function App() {
  //let [number, setNumber] = React.useState(45);
  let val = React.useState(49); //first index will have value while second index will heave function to update value
  return (
    <ValueContext.Provider value={val}>
      <div>
        Hello World
      <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
