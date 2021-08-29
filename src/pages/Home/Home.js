import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row
        style={{
          backgroundColor: "#e5e4e9",
          justifyContent: "center",
          paddingTop: 80,
          paddingBottom: 60,
        }}
      >
        <Col xs={8} md={8}>
          <span
            style={{ fontFamily: "SBAggroB", fontSize: 50, color: "#436b95" }}
          >
            원클릭 제사
          </span>
          <p
            style={{
              fontFamily: "SBAggroL",
              fontSize: 22,
              color: "gray",
            }}
          >
            클릭 몇 번으로 제사 준비를 완료하세요!
          </p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#e5e4e9",
          justifyContent: "center",
        }}
      >
        <Col
          xs={8}
          md={4}
          style={{
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          <span
            style={{
              fontFamily: "SBAggroB",
              fontSize: 36,
              color: "#436b95",
            }}
          >
            축문 & 지방 쉽게 작성하기
          </span>
          <p
            style={{
              fontFamily: "SBAggroL",
              fontSize: 22,
              color: "gray",
            }}
          >
            축문과 지방을 가장 쉽게 쓰는 방법
          </p>
          <Button
            style={{
              fontFamily: "SBAggroL",
              backgroundColor: "gray",
              borderColor: "gray",
            }}
          >
            더 알아보기
          </Button>
        </Col>
        <Col
          xs={8}
          md={4}
          style={{
            paddingTop: 80,
            paddingBottom: 80,
          }}
        >
          <span
            style={{
              fontFamily: "SBAggroB",
              fontSize: 36,
              color: "#436b95",
            }}
          >
            제사 관련 정보 알아보기
          </span>
          <p
            style={{
              fontFamily: "SBAggroL",
              fontSize: 22,
              color: "gray",
            }}
          >
            제사상 진설법, 상차림 예시 등
          </p>
          <Button
            style={{
              fontFamily: "SBAggroL",
              backgroundColor: "gray",
              borderColor: "gray",
            }}
          >
            더 알아보기
          </Button>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#e5e4e9",
          justifyContent: "center",
          paddingTop: 80,
          paddingBottom: 60,
        }}
      >
        <Col xs={8} md={8}>
          <span
            style={{ fontFamily: "SBAggroB", fontSize: 36, color: "#436b95" }}
          >
            제사 지내는 순서
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
