import React from 'react'
import { Col } from 'reactstrap'
import EditProfile from './EditProfile'
import SideBar from './SideBar'

export default function EditProfileSideBar() {
    return (
        <div>
            <Col md={7} >
                <EditProfile />
            </Col>

            <Col md={5} >
                <SideBar />
            </Col>
        </div>
    )
}
