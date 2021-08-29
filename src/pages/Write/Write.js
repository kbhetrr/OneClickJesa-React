import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Chukmoon from "../../Components/Chukmoon";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

import NameData from "../../Datas/Name_Data.json";
import getLunarInfo from "./getLunarInfo";

import { toast } from "react-toastify";

const RelationData = [
  { label: "고조부모" },
  { label: "증조부모" },
  { label: "조부모" },
  { label: "부모" },
  { label: "백부모" },
  { label: "숙부모" },
  { label: "형, 형수" },
  { label: "동생, 제수" },
  { label: "아들, 며느리" },
  { label: "남편, 아내" },
];

const DayHangul = [
  "일",
  "이",
  "삼",
  "사",
  "오",
  "육",
  "칠",
  "팔",
  "구",
  "십",
  "십일",
  "십이",
  "십삼",
  "십사",
  "십오",
  "십육",
  "십칠",
  "십팔",
  "십구",
  "이십",
  "이십일",
  "이십이",
  "이십삼",
  "이십사",
  "이십오",
  "이십육",
  "이십칠",
  "이십팔",
  "이십구",
  "삼십",
];

const DayHanja = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二",
  "十三",
  "十四",
  "十五",
  "十六",
  "十七",
  "十八",
  "十九",
  "二十",
  "二十一",
  "二十二",
  "二十三",
  "二十四",
  "二十五",
  "二十六",
  "二十七",
  "二十八",
  "二十九",
  "三十",
];

const Write = () => {
  const [Name, setName] = useState("");
  const [WriteDate, setWriteDate] = useState("");
  const [Relation, setRelation] = useState(null);
  const [FamilyOrigin, setFamilyOrigin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const WriteChukmoon = () => {
    setLoading(true);

    if (Name === "") {
      toast.error("제주의 이름을 입력해주세요.");
      return;
    }
    if (WriteDate === "") {
      toast.error("제사지내는 날짜를 입력해주세요.");
      return;
    }
    if (Relation === null) {
      toast.error("제주와의 관계를 선택해주세요.");
      return;
    }
    if (FamilyOrigin === null) {
      toast.error("본관, 성씨를 선택해주세요.");
      return;
    }

    let ChukmoonHangulData = new Object();
    let ChukmoonHanjaData = new Object();

    const DateArr = WriteDate.split("-");
    const year = DateArr[0];
    const month = DateArr[1];
    const day = DateArr[2];

    let SolarDay = new Date(year + "-" + month + "-" + day);

    const LunarData = getLunarInfo(year, month, day);
    LunarData.then((Data) => {
      ChukmoonHangulData["1항"] = Data.lunSecha.slice(0, 2);
      ChukmoonHanjaData["1항"] = Data.lunSecha.slice(3, 5);

      ChukmoonHangulData["2항"] = DayHangul[Number(Data.lunMonth) - 1];
      ChukmoonHanjaData["2항"] = DayHanja[Number(Data.lunMonth) - 1];

      ChukmoonHangulData["4항"] = DayHangul[Number(Data.lunDay) - 1];
      ChukmoonHanjaData["4항"] = DayHanja[Number(Data.lunDay) - 1];

      ChukmoonHangulData["5항"] = Data.lunIljin.slice(0, 2);
      ChukmoonHanjaData["5항"] = Data.lunSecha.slice(3, 5);

      let LunarFirstDay = new Date(
        SolarDay.setDate(SolarDay.getDate() - (Data.lunDay - 1))
      );

      const LunarFirstData = getLunarInfo(
        LunarFirstDay.getFullYear(),
        String(LunarFirstDay.getMonth() + 1).padStart(2, "0"),
        String(LunarFirstDay.getDate()).padStart(2, "0")
      );

      LunarFirstData.then((FirstData) => {
        ChukmoonHangulData["3항"] = FirstData.lunIljin.slice(0, 2);
        ChukmoonHanjaData["3항"] = FirstData.lunIljin.slice(3, 5);
      }).catch((e) => {
        console.log(e);
      });
    });

    console.log(ChukmoonHangulData);
    console.log(ChukmoonHanjaData);

    setLoading(false);
  };

  const Reset = () => {
    setName("");
    setWriteDate("");
    setRelation(null);
    setFamilyOrigin(null);
  };

  return (
    <Container fluid style={{ backgroundColor: "#e5e4e9" }}>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={10} sm={10} md={6} style={{ margin: 16 }}>
          <Row>
            <span
              style={{ fontFamily: "SBAggroB", fontSize: 32, color: "#436b95" }}
            >
              손쉽게 축문을 작성할 수 있습니다.
            </span>
          </Row>
          <Row>
            <span
              style={{ fontFamily: "SBAggroL", fontSize: 20, color: "gray" }}
            >
              클릭 몇 번만으로
            </span>
          </Row>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={10} sm={10} md={6} style={{ padding: 8 }}>
          <form>
            <FormControl style={{ width: "100%" }}>
              <Row
                style={{
                  alignItems: "center",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                <Col>
                  <span
                    style={{
                      marginTop: 16,
                      marginBottom: 4,
                      fontFamily: "SBAggroL",
                      fontSize: 18,
                    }}
                  >
                    제주의 이름
                  </span>
                </Col>
                <Col>
                  <Input
                    fullWidth
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    inputProps={{ style: { fontFamily: "SBAggroL" } }}
                  />
                  <FormHelperText
                    style={{ fontFamily: "SBAggroL", fontSize: 10 }}
                  >
                    성 제외, 한글 또는 한자
                  </FormHelperText>
                </Col>
              </Row>

              <Row
                style={{
                  alignItems: "center",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                <Col>
                  <span
                    style={{
                      marginTop: 16,
                      marginBottom: 4,
                      fontFamily: "SBAggroL",
                      fontSize: 18,
                    }}
                  >
                    제사지내는 날짜 (양력)
                  </span>
                </Col>
                <Col>
                  <TextField
                    fullWidth
                    type="date"
                    value={WriteDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{ style: { fontFamily: "SBAggroL" } }}
                    onChange={(e) => setWriteDate(e.target.value)}
                  />
                  <FormHelperText
                    style={{ fontFamily: "SBAggroL", fontSize: 10 }}
                  >
                    1391년 2월 5일 ∼ 2050년 12월 31일
                  </FormHelperText>
                </Col>
              </Row>
              <Row
                style={{
                  alignItems: "center",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                <Col>
                  <span
                    style={{
                      marginTop: 16,
                      marginBottom: 4,
                      fontFamily: "SBAggroL",
                      fontSize: 18,
                    }}
                  >
                    제주와의 관계
                  </span>
                </Col>
                <Col>
                  <Autocomplete
                    value={Relation}
                    size="small"
                    options={RelationData}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField
                        InputProps={{ style: { fontSize: 6 } }}
                        {...params}
                        variant="outlined"
                      />
                    )}
                    onChange={(event, value) => setRelation(value)}
                  />
                </Col>
              </Row>
              <Row
                style={{
                  alignItems: "center",
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                <Col>
                  <span
                    style={{
                      marginTop: 16,
                      marginBottom: 4,
                      fontFamily: "SBAggroL",
                      fontSize: 18,
                    }}
                  >
                    본관, 성씨
                  </span>
                </Col>
                <Col>
                  <Autocomplete
                    value={FamilyOrigin}
                    size="small"
                    options={NameData}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                      <TextField {...params} variant="outlined" />
                    )}
                    onChange={(event, value) => setFamilyOrigin(value)}
                  />
                </Col>
              </Row>
            </FormControl>
            <Row style={{ justifyContent: "center" }}>
              <Col>
                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    marginTop: 32,
                    fontFamily: "SBAggroL",
                    color: "#ffffff",
                    justifyContent: "center",
                    backgroundColor: "#436b95",
                    borderRadius: 20,
                  }}
                  onClick={WriteChukmoon}
                >
                  축문 작성하기
                </Button>
              </Col>
              <Col>
                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    marginTop: 32,
                    fontFamily: "SBAggroL",
                    color: "#ffffff",
                    justifyContent: "center",
                    backgroundColor: "gray",
                    borderRadius: 20,
                  }}
                  onClick={Reset}
                >
                  초기화
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        {Loading ? <div>축문 작성 중...</div> : <Chukmoon />}
      </Row>
    </Container>
  );
};

export default Write;
