////useState is for simple state(single value) management for invidual component
////reducer is for complette state management of the application
////with reducer you could add multiple type of action for a state
////below is pure function which means it doesnot update external API, variables, states, whenever we use it, it creates new object and returns the new object
////reducer knows state in which you are using it
////you can also pass masg to reducer like below example
const numberReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.masg
        case 'DECREMENT':
            return state - action.masg
        default:
            return state
    }
}

export default numberReducer;