import React from 'react';

const ValueContext = React.createContext(45, ()=>{});////default value is 45, if value context wrapper is not provided then default value will be used

export default ValueContext;
////usecontext has provider and consumer
////sort of global value 