import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './Home/Home';
import Registration from './Registration/Registration';
import Signup from './Signup/Signup';
import Signin from './Signup/Signin';
import NavBar from './Home/NavBar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter,
   Routes,
   Route,
   } from "react-router-dom";
import Forgotpassword from './Signup/Forgotpassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path="app" element={<App />} /> */}
      <Route path="/" element={<Signup />}/>
      <Route path="/Signin" element={<Signin />}/>
      <Route path="/forgotpassword" element={<Forgotpassword />}/>
      <Route path="home" element={<Home />} />
      <Route path="navbar" element={<NavBar />} />
      <Route path="/registration" element={<Registration />} exact/>
    </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);

reportWebVitals();
