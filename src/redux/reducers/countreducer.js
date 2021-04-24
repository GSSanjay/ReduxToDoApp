const countreducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC":
      let count = state.count + 1;
      console.log(state);
      return { ...state, count };
    default:
      return state;
  }
};

export default countreducer;
