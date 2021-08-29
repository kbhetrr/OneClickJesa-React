import React from "react";
import { Row, Col } from "react-bootstrap";

const DATA = [
  "향근현현현 유",
  " 이고고고  ",
  "  조조조 세",
  " 청고비고 차",
  " 작 유학  ",
  " 서휘인생 ㅇ",
  " 수일ㅇ부 ㅇ",
  "  부ㅇ군  ",
  " 공림ㅇ  ㅇ",
  " 신 ㅇ  월",
  " 전추    ",
  " 헌원세 효ㅇ",
  "  감서 현ㅇ",
  " 상시천 손 ",
  "   역  삭",
  "  불  ㅇ ",
  "  승  ㅇㅇ",
  "  영   ㅇ",
  "  모  감일",
  "     소 ",
  "     고ㅇ",
  "     우ㅇ",
];

const Chukmoon = () => {
  return (
    <Col
      className="border border-dark"
      xs={10}
      sm={10}
      md={4}
      style={{
        padding: 32,
        margin: 32,
        fontFamily: "Eulyoo1945-SemiBold",
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: "white",
      }}
    >
      {DATA.map((s) => (
        <Row>
          {s.split("").map((text) => (
            <Col style={{ textAlign: "center" }}>{text}</Col>
          ))}
        </Row>
      ))}
    </Col>
  );
};

export default Chukmoon;
