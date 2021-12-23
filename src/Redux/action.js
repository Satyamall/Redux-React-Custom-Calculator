

const addCounter = (payload) => {
    return {
      type: "ADD_COUNTER",
      payload
    };
  };
  
  const reduceCounter = (payload) => {
    return {
      type: "REDUCE_COUNTER",
      payload
    };
  };
  
  export { addCounter, reduceCounter};