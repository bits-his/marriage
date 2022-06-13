import React, { useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button, Input, Label, Container, Table, } from "reactstrap"


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
  yesplease:"",
  imBusyMostly:"",
  illtrymybest:"",
  yes:"",
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
  
}
const [form, setForm] = useState (_form)
const [data, setData] = useState ()
const [radio, setRadio] = useState ()


const handleChange = ({ target: { name, value } }) =>
setForm((p) => ({ ...p, [name]: value }));

// const handleRadio = (event) => {
//   setRadio(event.target.value)
// }

// const resetRadioState = () => {
//   setRadio('');
// }


  return (
    <div>
      <Container>
        <Card>
          <center><h2>Dating Side</h2></center>
          <CardBody>
            <Row className="mt-3">
              <Col md={3} >
                <Label>Name</Label>
                <Input type="text" name="name" value={form.name} onChange={handleChange}/>
                <Label>First Name</Label>
              </Col>

              <Col md={3}>
                <Label>Last Name</Label>
                <Input type="text" name="lastName" value={form.lastName} onChange={handleChange}/>
                <Label>Last Name</Label>
              </Col>

              <Col md={6}>
                <Label>Date Of Birth</Label>
                <Input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange}/>
                <Label>Date</Label>
              </Col>

              <Col md={6} className="mt-3">
                <h5>Are you currently working or in school?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={4}>
                <Input type="radio" name="school" value={form.school} onChange={handleChange}/>
                <Label>School</Label>
              </Col>
              <Col md={4}>

                <Input type="radio" name="working" value={form.working} onChange={handleChange}/>
                <Label>Working</Label>
              </Col>
              <Col md={4}>

                <Input type="radio" name="both" value={form.both} onChange={handleChange}/>
                <Label>Both</Label>
              </Col>
              <Col md={4}>

                <Input type="radio" name="none" value={form.none} onChange={handleChange}/>
                <Label>None</Label>
              </Col>
              <Col md={4}>

                <Input type="radio" name="na" value={form.na} onChange={handleChange}/>
                <Label>N/A</Label>
              </Col>

              <Col md={4}>
                <Input type="radio" name="other" value={form.other} onChange={handleChange}/>
                <Label>Other</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Do you drink or smoke? please be honest.</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={6}>
                <Input type="radio" name="both" value={form.both} onChange={handleChange}/>
                <Label>Both</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="justSmoke" value={form.justSmoke} onChange={handleChange}/>
                <Label>Just smoke</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="justDrink" value={form.justDrink} onChange={handleChange}/>
                <Label>Just Drink</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="other" value={form.other} onChange={handleChange}/>
                <Label>Other</Label>
              </Col>

              <Col md={6} className="mt-3">
                <h5>Are you willing to go on dates?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={6}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange}/>
                <Label>Yes</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="no" value={form.no} onChange={handleChange}/>
                <Label>No</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Would you be a supportive partner?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={6}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange}/>
                <Label>Yes</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="no" value={form.no} onChange={handleChange}/>
                <Label>No</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Would you wannan come  over a lot and cuddle?</h5>
              </Col>
              <Col md={6}></Col>
              <Col md={4}>
                <Input type="radio" name="yesPlease"  value={form.yesplease} onChange={handleChange}/>
                <Label>Yes please</Label>
              </Col>
              <Col md={4}>
                <Input type="radio" name="imBusyMostly" value={form.imBusyMostly} onChange={handleChange}/>
                <Label>I'm busy mostly</Label>
              </Col>
              <Col md={4}>
                <Input type="radio" name="illtrymybest" value={form.illtrymybest} onChange={handleChange}/>
                <Label>I'll try my best</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Do you like shopping?</h5>
              </Col>
              <Col md={6}></Col>
              <Col md={4}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange} />
                <Label>Yes</Label>
              </Col>
              <Col md={4}>
                <Input type="radio" name="no" value={form.no} onChange={handleChange}/>
                <Label>No</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange}/>
                <Label>Yes</Label>
              </Col>
              <Col md={4}>
                <Input type="radio" name="depends" value={form.depends} onChange={handleChange}/>
                <Label>Depends</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Are you shy?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={6}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange}/>
                <Label>Yes</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="no" value={form.no} onChange={handleChange}/>
                <Label>No</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Do you like affection?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={6}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange}/>
                <Label>Yes</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="no" value={form.no} onChange={handleChange}/>
                <Label>No</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Have you cheated before?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={6}>
                <Input type="radio" name="yes" value={form.yes} onChange={handleChange}/>
                <Label>Yes</Label>
              </Col>
              <Col md={6}>
                <Input type="radio" name="no" value={form.no} onChange={handleChange}/>
                <Label>No</Label>
              </Col>
              <Col md={6} className="mt-3">
                <h5>Marital status?</h5>
              </Col>
              <Col md={6}>
              </Col>
              <Col md={3}>
                <Input type="radio" name="single" value={form.single} onChange={handleChange}/>
                <Label>Single</Label>
              </Col>
              <Col md={3}>
                <Input type="radio" name="divorced" value={form.divorced} onChange={handleChange}/>
                <Label>Divorced</Label>
              </Col>
              <Col md={3}>
                <Input type="radio" name="widowed" value={form.widowed} onChange={handleChange}/>
                <Label>Widowed</Label>
              </Col>
              <Col md={3}>
                <Input type="radio" name="other" value={form.other} onChange={handleChange}/>
                <Label>Other</Label>
              </Col>
              <Col md={4}>
                <Label>Email</Label>
                <Input type="email" name="email" value={form.email} onChange={handleChange}/>
              </Col>
              <Col md={4}>
                <Label>Phone Number</Label>
                <Input type="number" />
              </Col>
              <Col md={4}>
                <Label>State you live in </Label>
                <Input type="select" placeholder="plese select" name="stateYouLiveIn" value={form.stateYouLiveIn} onChange={handleChange}/>
              </Col>
              <Col md={4}>
                <Label>Heaght</Label>
                <Input type="number" name="heaght" value={form.heaght} onChange={handleChange}/>
              </Col>
              <Col md={4}>
                <Label>Weight</Label>
                <Input type="number" name="weaght" value={form.weight} onChange={handleChange}/>
              </Col>
              <Col md={4}>
                <Label>Eye Color </Label>
                <Input type="select" name="eyeColor" value={form.eyeColor} onChange={handleChange}/>
              </Col>
              <Col md={4}>
                <Label>Natural Heir Color</Label>
                <Input type="select" placeholder="plese select"/>
              </Col>
              <Col md={4}>
                <Label>Measurements</Label>
                <Input type="text"/>
              </Col>
              <Col md={6}>
                <Label>Give a brief description of yourself</Label>
                <Input type="textarea"/>
              </Col>
              <Col md={6}>
                <Label>Why you think we'd be a good couple?</Label>
                <Input type="textarea"/>
              </Col>
              <Col md={6}>
                <Label>Recent photo</Label>
                <Input type="file"/>
               </Col>
            </Row>
            <center><Button className="mt-3">Submit</Button></center>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
