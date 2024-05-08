import React from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const { Title } = Typography;
  return (
    <div className="navbar">
      <Row>
        <Col span={8}>
          <Title className="item1" level={4}>
            OnePiece
          </Title>
        </Col>
        <Col className="navbar-items" span={16}>
          <Title className="item" level={4}>
            <Link to="/">Home</Link>
          </Title>
          <Title className="item" level={4}>
            <Link to="/charecters">Characters</Link>
          </Title>
          <Title className="item" level={4}>
            <Link to="/creator">Creator</Link>
          </Title>
          <Title className="item" level={4}>
            <Link to="/myself">Myself</Link>
          </Title>
          <Title className="item" level={4}>
            <Link to="/contactme">Contact me</Link>
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
