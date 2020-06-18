import React from 'react';
import ValueContext from './ValueContext';

function Child() {
    let value = React.useContext(ValueContext); //we could use complex object with usecontext 
    ////**let updateValue = vallue[1] //function to update value is at index 2
    return (
        <div>
            Child {value[0]}
            <br />
            <br/>
            <button onClick={()=>{value[1](++value[0])}}>Update Value</button>
        </div>
    );
}

export default Child;
