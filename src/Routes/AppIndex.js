import React from 'react'
import { Outlet } from 'react-router'
import { Row,Col } from 'reactstrap'
import Navbar from '../Home/NavBar'

export default function AppIndex() {
    return (
        <div>
            <Row style={{margin:0}}>
                <Col>
                    <Navbar />
                </Col>
            </Row>
            {/* <Row style={{margin:0}}> */}
            <Row style={{margin:0, marginTop:75, marginBottom:20}}>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </div>
    )
}
