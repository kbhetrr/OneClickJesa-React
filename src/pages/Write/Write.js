import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Chukmoon from "../../Components/Chukmoon";

const Write = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={6} style={{ margin: 16 }}>
          <Row>
            <h4 style={{ fontFamily: "NanumGothic" }}>
              손쉽게 축문을 작성할 수 있습니다.
            </h4>
          </Row>
          <Row>
            <h6>클릭 몇 번만으로.</h6>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Chukmoon />
      </Row>
    </Container>
  );
};

export default Write;
