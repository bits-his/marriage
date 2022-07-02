import React, { useState } from "react";
import { Card, Col, Input, Label, Button, Row,  } from "reactstrap";
import { CircularProgressbar } from 'react-circular-progressbar';
// import { User } from 'react-feather';
import { CardBody, CardHeader } from "reactstrap";
import "./navbar.css";
import ngd from "./ngd.jpg";

// import states from "../states";
import localGoverment from "../localGoverment";


export default function Home() {
    const _form = {
        search: "",
        seeking: "",
        age: "",
        country: "",
        stateProvince: "",
        city: "",
        within: "",
        im: ""
    }

    const [form, setForm] = useState(_form)
    // const [data, useData] = useState([])
    const [LGAs, setLGAs] = useState([])

    const handleChange = ({ target: { name, value } }) =>
        setForm((p) => ({ ...p, [name]: value }));

    const value = 0.66;
    return (
        <div className="mt-3">

            <div style={{position:'relative'}}>
                <Card>
                    <CardHeader style={{height: "10em"}}>
                        <Row>
                            <Col md={6}>
                                <h1 className="dp-name">
                                    <img src={ngd} className="dp1" alt="profile" />
                                </h1>
                            </Col>
                            <Col md={6} className="mt-3">
                                <div style={{ width: "20rem", height: "20", displayFlex: 20 }} className="circul">
                                    <Col md={2}><CircularProgressbar value={66} /></Col>
                                    <Col md={2}><CircularProgressbar value={value} maxValue={2} text={`${value * 100}%`} /></Col>
                                    <Col md={2}><CircularProgressbar value={value} maxValue={3} text={`${value * 100}%`} /></Col>
                                    <Col md={2}><CircularProgressbar value={value} maxValue={2} text={`${value * 100}%`} /></Col>
                                    <Col md={2}><CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} /></Col>
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody style={{ height: "10em" }}>

                    </CardBody>
                </Card>
            </div>
            <div style={{position:'absolute', top:210}}>
                <div>
                    <Card className="shadow shado p-3" >
                        <Row>
                            <Col md={2}>
                                <Label>I'm</Label>
                                <Input type="select" name="im" value={form.im} onChange={handleChange}>
                                    <option>Any</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                </Input>
                            </Col>
                            <Col md={2}>
                                <Label>Seeking</Label>
                                <Input type="select" name="seeking" value={form.seeking} onChange={handleChange}>
                                    <option>Any</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                </Input>
                            </Col>
                            <Col md={1}>
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
                            <Col md={1}>
                                <Label>Within</Label>
                                <Input type="text" placeholder="Kms" name="within" value={form.within} onChange={handleChange} />
                            </Col>
                            <Col md={2}>
                                <Button className="mt-4">Search</Button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>

        </div>
    )
}
