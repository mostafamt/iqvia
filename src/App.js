import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "@reduxjs/toolkit";
import reducer from "./store/reducers";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
