import { useSelector } from "react-redux";
// import {} from "./redux/actions";

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
