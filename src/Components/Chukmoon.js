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

const DATA_HANGUL = [
  "유 세차 ㅇㅇ ㅇㅇ월 ㅇㅇ 삭 ㅇㅇ일 ㅇㅇ",
  "효자 ㅇㅇ 감소고우",
  "현고학생부군 세서천역",
  "휘일부림 추원감시 호천망극",
  "근이 청작서수 공신전헌 상",
  "향",
];

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
        fontSize: 14,
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

      {/*DATA_.reverse().map((s) => {
        idxRow += 1;
        return (
          <Col key={idxRow}>
            {s.split("").map((text) => {
              console.log(text);
              idxCol += 1;
              return (
                <Row key={idxCol} style={{ textAlign: "center", width: 1 }}>
                  {text}
                </Row>
              );
            })}
          </Col>
        );
      })*/}
    </Col>
  );
};

export default Chukmoon;
