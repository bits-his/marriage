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
    fetch("http://localhost:34567/api/long_in", {
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
      <Row className="m-0 p-0">

        <Col md={6} className="left">
          {/* <h4>Datin Site</h4> */}
          {/* <img src={ngd} alt='ngd' style={{width: "30rem"}}/> */}
        </Col>
        <Col md={6} className='right'>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>

              <Card className="p-5 m-1 signin-card" style={{borderRadius:20, border:'none'}}>
                <center><h3>SingIn</h3></center>
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
                    <p
                      // className="text-center mt-3"
                      style={{ fontSize: 12, float: "right", cursor: "pointer" }}
                    >
                      Forgot password?
                    </p>
                  </Col>
                </Row>
                <center>
                  <Button
                    onClick={handleAdd}
                    className="mt-3"
                    style={{ width: "5rem" }}>
                    SingIn
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