
import React from "react";
// import { useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ngd from "./ngd.jpg"

import "./navbar.css";

export default function Home() {
  // const navigate = useNavigate();
  return (
    <div>
      <div className="nav-bar">
        <Row className="navbar-row">
          <Col md={2} className="nav-items">
            <ul className="nav-list">
              <a href="#features">
              </a>
            </ul>
          </Col>
          <Col md={7} className="nav-items">
            <ul className="nav-list">
              <a href="#features">
                <li className="l">66778</li>
              </a>

              <a href="#subscribe">
                <li className="l">Matches</li>
              </a>
              <a href="#contact">
                <li className="l">Search</li>
              </a>
              <a href="#contact">
                <li className="l">Message</li>
              </a>
              <a href="#contact">
                <li className="l">Activity</li>
              </a>
            </ul>
          </Col>
          <Col md={3} className="div">
            <div className="img1">
              <img src={ngd} className='profile' alt="profile" />
              <p style={{ display: 'inline', color: 'white' }}>{' '}Nagudun waka</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}