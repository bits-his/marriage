
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Card, Row, Col, Input, Label, Button } from "reactstrap"
import "./sign.css"
// import ngd from './ngd.jpg';



function Signin() {
  const navigate = useNavigate()

  const _form = {
    username: "",
    email: "",
    password: "",
    i_m_a: "",
    i_m_looking_for: "",
    age: "",
  }

  const [form, setForm] = useState(_form)
  // const [data, setData] = useState([])


  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleAdd = (e) => {
    e.preventDefault()
    console.log(form)
    fetch("http://localhost:34567/api/sing_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        form
      )

    }
    ).then((raw) => raw.json())
      .then(() => {
        alert("Account created successfully")
        navigate("/homepage")

      })

      .catch((err) => console.log(err))
    setForm(_form)
  }

  return (
    <div className="body">
      {/* <Container style={{marginTop: "8rem"}}> */}
      <Row className="m-0 p-0">
        <Col md={6} className="left">
          {/* <h1 className="">Datin Site</h1> */}
        </Col>
        <Col md={6} className='right'>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>

              <Card className="p-5 m-1 signin-card" style={{ borderRadius: 20, border: 'none' }}>
                <center><h3 className="signup">Sign Up</h3></center>
                <Row>
                  <Col md={12}>
                    <Label>Full Nama</Label>
                    <Input type="text" placeholder="full Name"
                      className="mb-4 signup-input" name="username"
                      value={form.username}
                      onChange={handleChange} />
                  </Col>
                  <Col md={4}>
                    <Label>I'm a</Label>
                    <Input type="select" name="i_m_a"
                      value={form.i_m_a}
                      onChange={handleChange}>
                      <option>plase select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </Col>
                  <Col md={4}>
                    <Label>I'm Looking For</Label>
                    <Input type="select" name="i_m_looking_for"
                      value={form.i_m_looking_for}
                      onChange={handleChange}>
                      <option>plase select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </Col>
                  <Col md={4}>
                    <Label>Age</Label>
                    <Input type="select" name="age"
                      value={form.age}
                      onChange={handleChange}>
                      <option>plase select</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                    </Input>
                  </Col>
                  <Col md={12}>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"
                      className="mb-4" name="email"
                      value={form.email} onChange={handleChange} />
                  </Col>
                  <Col md={12}>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"
                      className="mb-4" name="password"
                      value={form.password}
                      onChange={handleChange} />
                  </Col>

                  <center>
                    <p style={{ fontSize: 12, color: 'rgb(125, 34, 43)' }}>Already have an account?
                      <span style={{ fontSize: 12, cursor: "pointer" }}
                        onClick={() => navigate("/Signin")}
                      >
                        Logn In
                      </span> here!</p>
                    <Button
                      onClick={handleAdd}
                      className=" s-btn"
                      style={{
                        width: "6rem",
                        border: "none", borderRadius: "5px",
                        backgroundColor: 'rgb(125, 34, 43)',
                        color: "white"
                      }}>
                      Sign Up
                    </Button>
                  </center>
                </Row>
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