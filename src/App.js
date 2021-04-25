import React from "react";
import { inc, add, deletemsg } from "./redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const state = useSelector((reducer) => reducer.countreducer);
  const message = useSelector((reducer) => reducer.addreducer);
  // console.log(state.count);
  let msgInput;
  console.log("message", message);

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
  };

  return (
    <>
      <main>
        <div className="container">
          {/* <h1>{state.count}</h1> */}

          {message.map((elem, index) => {
            return (
              <div className="sub-container">
                <p key={index}>
                  {elem.message}
                  <button
                    className="btn secondary-btn"
                    id={index}
                    onClick={(event) => deletemessage(event)}
                  >
                    Done
                  </button>
                </p>
              </div>
            );
          })}

          {/* <button onClick={increament}>+</button> */}
          <form onSubmit={(event) => addmessage(event)}>
            <input type="text" value={msgInput} name="msgInput" id="" />
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default App;
