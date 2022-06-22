import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardText, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Button, Row, UncontrolledDropdown, } from "reactstrap";

import states from "../states";
import localGoverment from "../localGoverment";


function Quetion() {

  const _form = {
    search: "",
    seeking: "",
    age: "",
    country: "",
    stateProvince: "",
    city: "",
    within: "",
  }

  const [form, setForm] = useState(_form)
  const [data, useData] = useState([])
  const [LGAs, setLGAs] = useState([])

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };

  return (
    <div>
      <Card className="shadow shado">
        <Row>
          <Col md={2}>
            <Label>Seeking</Label>
            <Input type="select" name="seeking" value={form.seeking} onChange={handleChange}>
              <option>Any</option>
              <option>Female</option>
              <option>Male</option>
            </Input>
          </Col>
          <Col md={2}>
            <Label>Age</Label>
            <Input type="select" name="age" value={form.age} onChange={handleChange}>
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

          <Col md={2}>
            <Label>State/Province</Label>
            <Input type="select" name="stateProvince" value={form.stateProvince}
              onChange={({ target: { value } }) => {
                setForm(p => ({ ...p, stateProvince: value }))
                let selected = localGoverment.find(a => a.state === value)
                setLGAs(selected.lgas)
              }}>
              <option >Any State</option>
              {localGoverment.map(item => <option>{item.state}</option>)}

            </Input>
          </Col>
          <Col md={2}>
            <Label>City</Label>
            <Input type="select" name="city" value={form.city} onChange={handleChange}>
              <option>Any City</option>
              {LGAs.map(item => <option>{item}</option>)}
            </Input>
          </Col>
          <Col md={2}>
            <Label>Within</Label>
            <Input type="text" placeholder="Kms" name="within" value={form.within} onChange={handleChange} />
          </Col>
          <Col md={2}>
            <Button className="mt-4">Search</Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}


export default Quetion;