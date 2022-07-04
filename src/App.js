import React from "react";
import './index.css';
import AppNavigation from "./Routes/AppNavigation";
import store from './redux/store'
import { Provider } from "react-redux";


function App() {
  return (
    <div className="body">
      <Provider store={store}>
      <AppNavigation /></Provider>
    </div>
  );
}

export default App
