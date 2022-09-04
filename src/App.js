import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "@reduxjs/toolkit";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes";

const store = createStore(reducers);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
