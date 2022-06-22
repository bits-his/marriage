import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./sign.css"
import ngd from './ngd.jpg';

import { Card, CardBody, Container, Row, Col, Input, Label, Button } from "reactstrap"

function Signin() {

  const navigate = useNavigate()
  const _form = {
    email: "",
    password: "",
  }

  const [form, setForm] = useState(_form)
  const [data, setData] = useState([])

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleAdd = (e) => {
    e.preventDefault()
    console.log(form)
    fetch("http://192.168.43.141:34567/api/long_in", {
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
    <div className="body">
      {/* <Container style={{marginTop: "8rem"}}> */}
      <Row className="m-0 p-0" style={{ marginTom: "10em" }}>

        <Col md={6} className="left">
        </Col>
        <Col md={6} className='right' style={{ marginTop: "7rem", }}>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>

              <Card className="p-5 m-1 signin-card" style={{ borderRadius: 20, border: 'none', height: "24em" }}>
                <center><h3 className="signup">Sign In</h3></center>
                <Input type="email" placeholder="Email" className="mb-4" name="email"
                  value={form.email} onChange={handleChange} />
                {/* <Label>password</Label> */}
                <Input type="password" placeholder="Password" className="mb-4" name="password"
                  value={form.password} onChange={handleChange} />
                <Row>
                  <Col md={6}>          
                    <label className="mt-3" style={{ fontSize: 12 }}>
                      <input type="checkbox" /> Remember Password
                    </label>
                  </Col>

                  <Col md={6}>
                    <span
                      style={{ fontSize: 12, float: "right", cursor: "pointer", 
                      fontSize: 12, color: 'rgb(125, 34, 43)'
                    }}
                      onClick={() => navigate("/forgotpassword")}>
                      Forgot password?
                    </span>
                  </Col>
                </Row>
                <center>
                  <Button
                    onClick={handleAdd}
                    className="mt-3 btn"
                    style={{
                      backgroundColor: "#dc4225", width: "5rem",
                      border: "none", borderRadius: "5px",
                      backgroundColor: 'rgb(125, 34, 43)',
                      color: "white"
                    }}>
                    Sign In
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
export default Signin;