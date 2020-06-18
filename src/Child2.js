import React from 'react';
import numberReducer from './numberReducer'

function Child2() {
    let [state, dispatch] = React.useReducer(numberReducer, 52);
    return (
        <div>
            Child 2 {state}
            <br /><br />
            <button onClick={() => {dispatch({type:"INCREMENT", masg:10});}}>Increment</button>
            <button onClick={() => {dispatch({type:"DECREMENT", masg:20});}}>Decrement</button>
        </div>
    );
}

export default Child2;
