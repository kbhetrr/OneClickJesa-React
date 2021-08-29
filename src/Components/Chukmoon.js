import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

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

const DATA_1 = ["유 세차 ㅇㅇ ㅇ월 ㅇㅇ 삭 ㅇㅇ일 ㅇㅇ", ""];

let idxRow = 0;
let idxCol = 0;
const Chukmoon = (props) => {
  return (
    <Col
      id="ChukmoonArea"
      className="border border-dark"
      xs={11}
      sm={11}
      md={4}
      style={{
        paddingTop: 32,
        paddingBottom: 32,
        margin: 8,
        fontFamily: "Eulyoo1945-SemiBold",
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      {DATA.map((s) => {
        idxRow += 1;
        return (
          <Row key={idxRow}>
            {s.split("").map((text) => {
              idxCol += 1;
              return (
                <Col key={idxCol} style={{ textAlign: "center", width: 1 }}>
                  {text}
                </Col>
              );
            })}
          </Row>
        );
      })}
      <Row>{props.Hang1}</Row>
    </Col>
  );
};

export default Chukmoon;
