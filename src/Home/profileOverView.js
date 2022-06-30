import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
// import { User } from 'react-feather';
import { Card, CardBody, CardHeader, Col,   Row,  } from "reactstrap";
import "./navbar.css";


export default function profileOverView() {

//   const percentage = 66;
  const value = 0.66;
    return (
        <div>
            <Card>
            <CardHeader >
                <Row>
                    <Col md={6}> </Col>
                    <Col md={6} className="">
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
            <CardBody>

            </CardBody>
            </Card>
        </div>
    )
}
