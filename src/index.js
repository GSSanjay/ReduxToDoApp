import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import App1 from "./App1";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <App1 />
    </Provider>
  </>,
  document.getElementById("root")
);
