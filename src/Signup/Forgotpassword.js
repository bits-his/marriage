import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./sign.css"
// import ngd from './ngd.jpg';

import { Card, Row, Col, Input, Button } from "reactstrap"

function Forgotpassword() {

  const navigate = useNavigate()
  const _form = {
    password: "",
  }

  const [form, setForm] = useState(_form)
  // const [data, setData] = useState([])

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleAdd = (e) => {
    e.preventDefault()
    console.log(form)
    fetch("http://192.168.43.141/api/#", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        form
      )
    }
    )
      .then((raw) => raw.json())
      .then(data => {
        if (data && data.loggedIn) {
          navigate("/home")
        } else {
          alert(data.message)
        }
      })
      .then((err) => console.log(err))
    setForm(_form)
  }

  return (
    <div className="body" >
      <Row className="m-0 p-0" >

        <Col md={6} className="left">
        </Col>
        <Col md={6} className='right' style={{marginTop: "10rem",}}>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>

              <Card className="p-5 m-1 signin-card" style={{ borderRadius: 20, border: 'none' }}>
                <center><h5 className="signup">Enter your email or </h5></center>
                <Input type="email" placeholder="Email" className="mb-4" name="email"
                  value={form.email} onChange={handleChange} />
               
                <center>
                  <Button
                    onClick={handleAdd}
                    className="mt-3"
                    style={{
                      backgroundColor: "#dc4225", width: "5rem",
                      border: "none", borderRadius: "5px"
                    }}>
                    Submit
                  </Button>
                </center>
              </Card>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
      </Row>

      {/* </Container> */}
    </div>
  )
}
export default Forgotpassword;