import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './Home/Home';
import Registration from './Registration/Registration';
import Signup from './Signup/Signup';
import Signin from './Signup/Signin';


// import Table from './Table';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter,
   Routes,
   Route,
   } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Signin" element={<Signin />}/>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} exact/>
    </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
