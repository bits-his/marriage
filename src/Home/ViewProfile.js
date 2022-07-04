import React from 'react'
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap'
import ngd2 from "./ngd2.jpg";
import "./navbar.css";

export default function ViewProfile() {
    return (
        <div>
            <Container className='p-2'>
                <Card className='p-3'>
                    <Row>
                        <CardBody>
                            <Row>
                                <Col md={6}>
                                    <did className="shadow">
                                        <img src={ngd2} className="vew-img" alt="profile" />
                                    </did>
                                </Col>
                                <Col md={6}>
                                    <Table className="mt-4 table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ijjjk</th>
                                                <th>jjk</th>
                                                <th>klklkl</th>
                                            </tr>
                                        </thead>

                                    </Table>
                                </Col>
                                <div className='overview'>
                                    <div className='details ash   '>
                                        <div className='detext '>
                                            Gender :
                                        </div>
                                    </div>
                                    <div className='details ash   '>
                                        <div className='detext'>
                                            Male
                                        </div>
                                    </div>
                                    <div className='details ash   '>
                                        <div className='detext'>
                                            Male
                                        </div>
                                    </div>
                                </div>
                                <div className='overview'>
                                    <div className='details dork '>
                                        <div className='detext '>
                                            Gender :
                                        </div>
                                    </div>
                                    <div className='details ash   '>
                                        <div className='detext'>
                                            Male
                                        </div>
                                    </div>
                                    <div className='details ash   '>
                                        <div className='detext'>
                                            Male
                                        </div>
                                    </div>
                                </div>

                            </Row>
                        </CardBody>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}
