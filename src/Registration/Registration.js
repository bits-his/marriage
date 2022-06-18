import React from 'react'
import "./registration.css"
import { Link } from 'react-router-dom';


function Registration() {

  const styles = {
    backgroundColor: 'transparent',
    // autocomplete="off" 
};

  return (
    <>
    <div className='bg-img'>

    {/* FORM  */}
   <div id="formWrapper">
     <div id="form">
       <h2 className="logo">Registration</h2>
       <div className="form-grid">
         <div className="form-item">
           <p className="formLabel">Name</p>
           <input
             type="text"
             name="email"
             id="email"
             className="form-style"
             style={styles}
             autocomplete="off" 
    
           />
         </div>
         <div className="form-item">
           <p className="formLabel">date of birth</p>
           <input
             type="date"
             name="date"
             id="date"
             className="form-style"
             autocomplete="off"
             style={styles}
           />
         </div>
         <div className="form-item">
           <p className="formLabel">Nationality</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
           {/* <!-- <div className="pw-view"><i className="fa fa-eye"></i></div> --> */}
         </div>

         {/* row 2****************************************************************************************************  */}

         <div className="form-item">
           <p className="formLabel">Tribe</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
         </div>
         <div className="form-item">
           <p className="formLabel">Complexion</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             autocomplete="off"
             style={styles}
           />
         </div>
         <div className="form-item">
           <p className="formLabel">Height</p>
           <input
             type="number"
             name="number"
             id="number"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
           
         </div>

         <div className="form-item">
           <p className="formLabel">Weight</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
         </div>
         <div className="form-item">
           <p className="formLabel">Marital status</p>
          
           <select className="form-styles">
             <option></option>
             <option>Single</option>

             <option>Divorced</option>
             <option>Widowed</option>
           </select>
         </div>
         <div className="form-item">
           <p className="formLabel">Occupation</p>
           <input
             type="text"
             name="number"
             id="number"
             className="form-style"
             style={styles}
             autocomplete="off"
           />

         </div>

         <div className="form-item">
           <p className="formLabel">Genotype</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
         </div>
         <div className="form-item">
           <p className="formLabel">Religion</p>
          
           <select     className="form-styles">
             <option></option>
             <option>Islam</option>
             <option>Christianity</option>
             <option>Pagan</option>
           </select>
         </div>
         <div className="form-item">
           <p className="formLabel">Current Location</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
       
         </div>
         <div className="form-item">
           <p className="formLabel">Hobbies</p>
       
           <textarea> </textarea>
         </div>
         <div className="form-item">
           <p className="formLabel">Religion</p>

           <select className='form-styles'>
             <option></option>
             <option>Islam</option>
             <option>Christianity</option>
             <option>Pagan</option>
           </select>
         </div>
         <div className='form-item'>
           <p className="formLabel">Current Location</p>
           <input
             type="text"
             name="text"
             id="text"
             className="form-style"
             style={styles}
             autocomplete="off"
           />
           
         </div>
         <button className="submit"><Link to="/">submit</Link></button>
         </div>
         </div>
         </div>
         </div>
         </> 
  )
}

export default Registration

