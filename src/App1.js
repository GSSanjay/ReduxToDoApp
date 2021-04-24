import { useSelector, useDispatch } from "react-redux";
// import {} from "./redux/actions";
import store from "./redux/store";

const App1 = () => {
  const data = useSelector((reducer) => reducer.addreducer);
  console.log(data);
  return (
    <>
      <h1>App1</h1>
    </>
  );
};

export default App1;
