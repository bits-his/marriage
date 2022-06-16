import React from 'react'
import { Link } from 'react-router-dom';
// import "./signup.css"

function Signin() {
  
  const styles = {
    border: '1px solid #ccc', 
};

// right-panel-active

  return (
    <div className="container">
    {/* <!-- Sign Up --> */}
    <div className="">
         <form action="#" className="form" id="">
            <h2 className="form__title">Sign Up</h2>
            <input type="email" placeholder="Email" className="inputForm" />
            <input type="password" placeholder="Password" className="inputForm"  id="password"/><button type="button" id="btnToggle" className="toggle">
                <i id="eyeIcon" className="fa fa-eye"></i>
              </button>
    

            <button className="btn" style={styles}><Link to="/">Log In</Link></button>
            <h6><Link to="/Signup">Create An Account If Not Exist<br />
            <Link to="/forgotpassword">Forget Password</Link>
            </Link></h6>
         </form>

        
    </div>

    {/* <!-- Sign In --> */}

    {/* <!-- Overlay --> */}
    {/* <div className="container__overlay">
        <div className="overlay">
            <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn" href="registration.html">Sign In</button>
            </div>
            <div className="overlay__panel overlay--right">
                <button className="btn" id="signUp">Sign Up</button>
            </div>
        </div>
    </div> */}
</div>
  )
}

export default Signin