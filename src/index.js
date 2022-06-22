import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './Home/Home';
import Quetion from './Home/Quetion';
import Registration from './Registration/Registration';
import Signup from './Signup/Signup';
import Signin from './Signup/Signin';
import NavBar from './Home/NavBar';
import ProfileOverView from './Home/profileOverView';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
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
      <Route path="Quetion" element={<Quetion />} />
      <Route path="navbar" element={<NavBar />} />
      <Route path="/registration" element={<Registration />} exact/>
      <Route path="/profileOverView" element={<ProfileOverView />} />
    </Routes>
    </BrowserRouter>  
  </React.StrictMode>
);

reportWebVitals();
