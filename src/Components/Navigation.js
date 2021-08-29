import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light">
      <Container>
        <Navbar.Brand
          href="/"
          className="menu-title"
          style={{ fontFamily: "SBAggroB" }}
        >
          원클릭 제사
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/write" style={{ fontFamily: "SBAggroL" }}>
              축문 & 지방 작성
            </Nav.Link>
            <Nav.Link href="/info" style={{ fontFamily: "SBAggroL" }}>
              제사 관련 정보
            </Nav.Link>
            <Nav.Link href="/about" style={{ fontFamily: "SBAggroL" }}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
