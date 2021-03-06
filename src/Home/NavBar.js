import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import ngd from "./ngd.jpg";

import "./navbar.css";

export default function Navbar() {
  const user = useSelector(state => state.auth.user)
  const [open, setOpen] = useState(false);
  const dropdown = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav-bar">
        <Row className="navbar-row">
          <Col md={1} className="nav-items">
            <p>Logo</p>
          </Col>
          <Col md={8} className="nav-items">
            <ul className="nav-list">

              <li className="l">66778</li>

              <li className="l">Matches</li>

              <li className="l">Search</li>


              <li className="l">Message</li>

              <li className="l">Activity</li>

            </ul>
          </Col>
          <Col md={2} className="div">
            {/* <div className="img1">
              <img src={ngd} className="profile" />
              <p style={{ display: "inline", color: "white" }}> Nagudun waka</p>
            </div> */}
            <Dropdown isOpen={open} toggle={dropdown}>
              <DropdownToggle
                data-toggle="dropdown"
                tag="span"
                onClick={dropdown}
              >
                <h1 className="dp-name">
                  <img src={ngd} className="dp" alt="profile" /> {user.username}
                </h1>
              </DropdownToggle>
              <DropdownMenu className="shadow" style={{ border: "none" }}>
                <div className="drop-p">
                  <p style={{ cursor: "pointer", margin: 8 }}
                    onClick={() => navigate("/view-profile")}>
                    view Profile
                  </p>
                </div>
                <div className="drop-p">
                  <p style={{ cursor: "pointer", margin: 8 }}
                    onClick={() => navigate("/edit-profile")}>

                    Edit Profile
                  </p>
                </div>
                <div className="drop-p">
                  <p style={{ cursor: "pointer", margin: 8 }}>
                    Photos
                  </p>
                </div>
                <div className="drop-p">
                  <p style={{ cursor: "pointer", margin: 8 }}>
                    Matches
                  </p>
                </div>
                <div className="drop-p">
                  <p style={{ cursor: "pointer", margin: 8 }}>
                    Verify Profile
                  </p>
                </div>
                <div className="drop-p">
                  <p style={{ cursor: "pointer", margin: 8 }} >
                    Switch Off Profile
                  </p>
                </div>

              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </div>
  );
}
