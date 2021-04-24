import React from "react";
import { inc, add, deletemsg } from "./redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import countreducer from "./redux/reducers/countreducer";

const App = () => {
  const state = useSelector((reducer) => reducer.countreducer);
  const message = useSelector((reducer) => reducer.addreducer);
  // console.log(state.count);
  let msgInput;
  console.log("message", message);

  // const arr = message.map((elem) => {
  //   return elem.message;
  // });
  // console.log(arr);

  const dispatch = useDispatch();
  const increament = () => {
    dispatch(inc());
  };

  const addmessage = (event) => {
    event.preventDefault();
    console.log(event.target.msgInput);
    msgInput = event.target.msgInput.value;
    // console.log(msgInput);
    dispatch(add(msgInput));
    event.target.msgInput.value = "";
    // console.log("Testing...");
  };

  const deletemessage = (event) => {
    // console.log(event.target.id);
    let id = parseInt(event.target.id);

    dispatch(deletemsg(id));
    /* 
    const arr = message.map((elem) => {
      return elem.message;
    });
    // console.log(arr);

    let temp = message.filter((elem, index) => {
      console.log("index ", index, "id ", id);
      console.log(index !== id);
      console.log(elem);
      return index !== id;
    });

    console.log("Filter", temp); */
  };

  return (
    <>
      <h1>{state.count}</h1>

      {message.map((elem, index) => {
        return (
          <p key={index}>
            {elem.message}
            <button id={index} onClick={(event) => deletemessage(event)}>
              Delete
            </button>
          </p>
        );
      })}

      <button onClick={increament}>+</button>
      <form onSubmit={(event) => addmessage(event)}>
        <input type="text" value={msgInput} name="msgInput" id="" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default App;
