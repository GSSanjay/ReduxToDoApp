import state from "../state";

let initialState = [...state];

// let initialState = [{ message: "Test" }];

const addreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.payload);
      return [...state, { message: action.payload }];
    case "DELETE":
      console.log(action.id);
      let id = action.id;
      console.log("type", typeof id);
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
      return state;
  }
};

export default addreducer;
