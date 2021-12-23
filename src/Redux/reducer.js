

const initState = {
    counter: 1
  };
  
  const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case "ADD_COUNTER":
        return {
          ...state,
          counter: state.counter + payload
        };
      case "REDUCE_COUNTER":
        return {
          ...state,
          counter: state.counter - payload
        };
      default:
        return state;
    }
  };
  
  export { reducer };
  