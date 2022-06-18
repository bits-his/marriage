import React, { useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, Input, Label, Container, Table, } from "reactstrap"
import FormWrapper from "./ui/FormWrapper";
import './index.css';
import React from 'react'
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, Input, Label, Container, Table, } from "reactstrap"
import { questionsData } from "./data";
import CustomRadio from "./ui/CustomRadio";
import FormWrapper from "./ui/FormWrapper";


function App() {

  const _form = {
    name: "",
    lastName: "",
    dateOfBirth: "",
    school: "",
    working: "",
    both: "",
    none: "",
    na: "",
    other: "",
    both: "",
    justSmoke: "",
    justDrink: "",
    other: "",
    yes: "",
    no: "",
    yes: "",
    no: "",
    yesplease: "",
    imBusyMostly: "",
    illtrymybest: "",
    yes: "",
    no: "",
    yes: "",
    depends: "",
    yes: "",
    no: "",
    yes: "",
    no: "",
    yes: "",
    no: "",
    single: "",
    divorced: "",
    widowed: "",
    other: "",
    email: "",
    phoneNumber: "",
    stateYouLiveIn: "",
    heaght: "",
    weight: "",
    eyeColor: "",
    naturalHeirColor: "",
    measurements: "",
    Giveabriefdescriptionofyourself: "",
    Whyyouthinkwedbeagoodcouple: "",
    occupation: "",
    country: "",
    recentphoto: "",

  }
  const [form, setForm] = useState(_form)
  const [data, setData] = useState([])

  const handleChange = ({ target: { name, value } }) =>{
    setForm((p) => ({ ...p, [name]: value }))};



  const handleAdd = () => {
    console.log(form)
    fetch("http://localhost:34567/api/regester", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        form
      )
      // .then((response) => console.log(response))
      // .then((err) => console.log(err))
    }
    )
    setForm(_form)
  }
  const steps = ["nagudu", "sadik"]

  return (
    <div className="body">
      {/* {JSON.stringify(form)} */}
      <Container>
        <FormWrapper
          steps={["SADIQ", "NAGUDU", "NUSAIBA"]}
          handleSubmit={handleAdd}
        >
          <Row>
            <center><h2>Dating Site😍</h2></center>
            <Col md={3} >
              <Label>Name</Label>
              <Input type="text" name="name"
                value={form.name}
                onChange={handleChange} />
              <Label>First Name</Label>
            </Col>

            <Col md={3}>
              <Label>Last Name</Label>
              <Input type="text" name="lastName"
                value={form.lastName}
                onChange={handleChange} />
              <Label>Last Name</Label>
            </Col>

            <Col md={6}>
              <Label>Date Of Birth</Label>
              <Input type="date" name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange} />
              <Label>Date</Label>
            </Col>

            <Col md={6} className="mt-3">
              <CustomRadio 
              name='school'
              value={form.school}
              label="Are you currently working or in school?"
              options={[
              { name: 'School', label: 'School' },
              { name: 'Working', label: 'Working' },
              { name: 'Both', label: 'Both' },
              { name: 'None', label: 'None' },
              { name: 'Other', label: 'Other' }
            ]}
              onChange={handleChange}
              />

            </Col>
          

            <Col md={6} className="mt-3">
              <h5>Do you drink or smoke? please be honest.</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Input type="radio" name="both"
                value={form.both}
                onChange={handleChange} />
              <Label>Both</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="justSmoke"
                value={form.justSmoke}
                onChange={handleChange} />
              <Label>Just smoke</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="justDrink"
                value={form.justDrink}
                onChange={handleChange} />
              <Label>Just Drink</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="other"
                value={form.other}
                onChange={handleChange} />
              <Label>Other</Label>
            </Col>

            <Col md={6} className="mt-3">
              <h5>Are you willing to go on dates?</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="no"
                value={form.no}
                onChange={handleChange} />
              <Label>No</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Would you be a supportive partner?</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col>
          </Row>
          <Row>
            <center><h2>Dating Site😍</h2></center>
            <Col md={6}>
              <Input type="radio" name="no"
                value={form.no}
                onChange={handleChange} />
              <Label>No</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Would you wannan come  over a lot and cuddle?</h5>
            </Col>
            <Col md={6}></Col>
            <Col md={4}>
              <Input type="radio" name="yesPlease"
                value={form.yesplease}
                onChange={handleChange} />
              <Label>Yes please</Label>
            </Col>
            <Col md={4}>
              <Input type="radio" name="imBusyMostly"
                value={form.imBusyMostly}
                onChange={handleChange} />
              <Label>I'm busy mostly</Label>
            </Col>
            <Col md={4}>
              <Input type="radio" name="illtrymybest"
                value={form.illtrymybest}
                onChange={handleChange} />
              <Label>I'll try my best</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Do you like shopping?</h5>
            </Col>
            <Col md={6}></Col>
            <Col md={4}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col>
            <Col md={4}>
              <Input type="radio" name="no"
                value={form.no}
                onChange={handleChange} />
              <Label>No</Label>
            </Col>
            {/* <Col md={6}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col> */}
            <Col md={4}>
              <Input type="radio" name="depends"
                value={form.depends}
                onChange={handleChange} />
              <Label>Depends</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Are you shy?</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="no"
                value={form.no}
                onChange={handleChange} />
              <Label>No</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Do you like affection?</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="no"
                value={form.no}
                onChange={handleChange} />
              <Label>No</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Have you cheated before?</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Input type="radio" name="yes"
                value={form.yes}
                onChange={handleChange} />
              <Label>Yes</Label>
            </Col>
            <Col md={6}>
              <Input type="radio" name="no"
                value={form.no}
                onChange={handleChange} />
              <Label>No</Label>
            </Col>
            <Col md={6} className="mt-3">
              <h5>Marital status?</h5>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={3}>
              <Input type="radio" name="single"
                value={form.single}
                onChange={handleChange} />
              <Label>Single</Label>
            </Col>
            <Col md={3}>
              <Input type="radio" name="divorced"
                value={form.divorced}
                onChange={handleChange} />
              <Label>Divorced</Label>
            </Col>
            <Col md={3}>
              <Input type="radio" name="widowed"
                value={form.widowed}
                onChange={handleChange} />
              <Label>Widowed</Label>
            </Col>
            <Col md={3}>
              <Input type="radio" name="other"
                value={form.other}
                onChange={handleChange} />
              <Label>Other</Label>
            </Col>
          </Row>
          <Row className="mt-3">
            <center><h2>Dating Site😍</h2></center>
            <Col md={4}>
              <Label>Email</Label>
              <Input type="email" name="email" value={form.email} onChange={handleChange} />
            </Col>
            <Col md={4}>
              <Label>Phone Number</Label>
              <Input type="number" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} />
            </Col>
            <Col md={4}>
              <Label>State you live in </Label>
              <Input type="select" placeholder="plese select"
                name="stateYouLiveIn" value={form.stateYouLiveIn}
                onChange={handleChange}>
                <option>---select---</option>
                <option>kano</option>
                <option>kaduna</option>
                <option>abuja</option>
                <option>bauchi</option>
                <option>gombai</option>
                <option>lagos</option>
                <option>katsina</option>
                <option>zamfara</option>
                <option>edo</option>
              </Input>

            </Col>
            <Col md={4}>
              <Label>Heaght</Label>
              <Input type="number" name="heaght"
                value={form.heaght}
                onChange={handleChange} />
            </Col>
            <Col md={4}>
              <Label>Weight</Label>
              <Input type="number" name="weight"
                value={form.weight}
                onChange={handleChange} />
            </Col>
            <Col md={4}>
              <Label>Eye Color </Label>
              <Input type="select" name="eyeColor"
                value={form.eyeColor}
                onChange={handleChange}>
                <option>---select---</option>
                <option>red</option>
                <option>white</option>
              </Input>
            </Col>
            <Col md={4}>
              <Label>Natural Heir Color</Label>
              <Input type="select" name="naturalHeirColor"
                value={form.naturalHeirColor}
                onChange={handleChange}>
                <option>---select---</option>
                <option>black</option>
                <option>white</option>
              </Input>
            </Col>
            <Col md={4}>
              <Label>Measurements</Label>
              <Input type="text" name="measurements"
                value={form.measurements}
                onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Label>Give a brief description of yourself</Label>
              <Input type="textarea" name="Giveabriefdescriptionofyourself"
                value={form.Giveabriefdescriptionofyourself}
                onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Label>Why you think we'd be a good couple?</Label>
              <Input type="textarea" name="Whyyouthinkwedbeagoodcouple"
                value={form.Whyyouthinkwedbeagoodcouple}
                onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Label>Occupation</Label>
              <Input type="text" name="occupation"
                value={form.occupation}
                onChange={handleChange} />

            </Col>
            <Col md={6}>
              <Label>Country</Label>
              <Input type="select" name="country"
                value={form.country}
                onChange={handleChange}>
                <option>---select---</option>
                <option>Nigeria</option>
                <option>Dubai</option>
                <option>America</option>
              </Input>
            </Col>
            <Col md={6}>
              <Label>Recent photo</Label>
              <Input type="file" name="recentphoto"
                value={form.recentphoto}
                onChange={handleChange} />
            </Col>
          </Row>

        </FormWrapper>

      </Container>
    </div>
  );
}

export default App
