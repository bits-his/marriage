
import React from 'react'
import { Link } from 'react-router-dom';
import "./signup.css"

function Signup() {

  // const _form = {
  //   name: "",
  //   email: "",
  //   password: ""
  // }

  // const signInBtn = document.getElementById("signIn");
  // const signUpBtn = document.getElementById("signUp");
  // const fistForm = document.getElementById("form1");
  // const secondForm = document.getElementById("form2");
  // const container = document.querySelector(".container");
  
  // signInBtn.addEventListener("click", () => {
  // 	container.classList.remove("right-panel-active");
  // });
  
  // signUpBtn.addEventListener("click", () => {
  // 	container.classList.add("right-panel-active");
  // });
  
  // fistForm.addEventListener("submit", (e) => e.preventDefault());
  // secondForm.addEventListener("submit", (e) => e.preventDefault());
  
  
  
  
  
  
  
  
  // let passwordInput = document.getElementById('password'),
  //     toggle = document.getElementById('btnToggle'),
  //     icon =  document.getElementById('eyeIcon');
  
  // function togglePassword() {
  //   if (passwordInput.type === 'password') {
  //     passwordInput.type = 'text';
  //     icon.classList.add("fa-eye-slash");
  //    toggle.innerHTML = 'hide';
  //   } else {
  //     passwordInput.type = 'password';
  //     icon.classList.remove("fa-eye-slash");
  //    toggle.innerHTML = 'show';
  //   }
  // }
  
  // function checkInput() {
  //  if (passwordInput.value === '') {
  //  toggle.style.display = 'none';
  //  toggle.innerHTML = 'show';
  //    passwordInput.type = 'password';
  //  } else {
  //    toggle.style.display = 'block';
  //  }
  // }
  
  // toggle.addEventListener('click', togglePassword, false);
  // passwordInput.addEventListener('keyup', checkInput, false);
  
  const styles = {
    border: '1px solid #ccc', 
};

  return (
    <div className="container">
    {/* <!-- Sign Up --> */}
    <div className="container">
         <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
             <input type="text" placeholder="name" className="inputForm" name="name"/>
            <input type="email" placeholder="Email" className="inputForm" />
            <input type="password" placeholder="Password" className="inputForm"  id="password"/><button type="button" id="btnToggle" className="toggle">
                <i id="eyeIcon" className="fa fa-eye"></i>
              </button>
    

            <button className="btn" style={styles}><Link to="/Signin">Sign Up</Link></button>
            <Link to="/Signin">Login</Link>
         </form>

        
    </div>
</div>
  )
}

export default Signup

    




//      <script>
//         const signInBtn = document.getElementById("signIn");
// const signUpBtn = document.getElementById("signUp");
// const fistForm = document.getElementById("form1");
// const secondForm = document.getElementById("form2");
// const container = document.querySelector(".container");

// signInBtn.addEventListener("click", () => {
// 	container.classList.remove("right-panel-active");
// });

// signUpBtn.addEventListener("click", () => {
// 	container.classList.add("right-panel-active");
// });

// fistForm.addEventListener("submit", (e) => e.preventDefault());
// secondForm.addEventListener("submit", (e) => e.preventDefault());





// // 
// // 

// let passwordInput = document.getElementById('password'),
//     toggle = document.getElementById('btnToggle'),
//     icon =  document.getElementById('eyeIcon');

// function togglePassword() {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     icon.classList.add("fa-eye-slash");
//     //toggle.innerHTML = 'hide';
//   } else {
//     passwordInput.type = 'password';
//     icon.classList.remove("fa-eye-slash");
//     //toggle.innerHTML = 'show';
//   }
// }

// function checkInput() {
//   //if (passwordInput.value === '') {
//   //toggle.style.display = 'none';
//   //toggle.innerHTML = 'show';
//   //  passwordInput.type = 'password';
//   //} else {
//   //  toggle.style.display = 'block';
//   //}
// }

// toggle.addEventListener('click', togglePassword, false);
// passwordInput.addEventListener('keyup', checkInput, false);
//     </script>