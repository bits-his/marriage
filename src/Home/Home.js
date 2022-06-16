import React from 'react'
 import "./home.css"
 import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="">
      <button className=""><Link to="/Register">Complete Your Profile</Link></button>
        <h1>  Welcome Aboard</h1>
        

    </div>
  )
}

export default Home