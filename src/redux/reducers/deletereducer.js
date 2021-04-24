import state from "../state";

let initialState = state;

const deletereducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      console.log(action.type);
      console.log(state);
      console.log(action.id);
      let id = action.id;
      console.log("type", typeof id);
      console.log(id);
      /*      const arr = state.map((elem) => {
        return elem.message;
      }); */
      let temp = state.filter((elem, index) => {
        // console.log("index ", index, "id ", id);
        // console.log(index !== id);
        console.log(elem);
        return index !== id;
      });

      console.log("Filter", temp);
      //   console.log(state);
      state = temp;
      return state;
    default:
      return [...state];
  }
};

export default deletereducer;
