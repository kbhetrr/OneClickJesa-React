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

const RelationData = [
  { label: "조부모님" },
  { label: "부모님" },
  { label: "부모님" },
  { label: "부모님" },
  { label: "부모님" },
];

const Write = () => {
  const [Name, setName] = useState("");
  const [WriteDate, setWriteDate] = useState("");
  const [Relation, setRelation] = useState(null);
  const [FamilyOrigin, setFamilyOrigin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const WriteChukmoon = () => {
    setLoading(true);

    console.log(Name);
    console.log(WriteDate);
    console.log(Relation);
    console.log(FamilyOrigin);

    if (WriteDate !== "") {
      const DateArr = WriteDate.split("-");
      const year = DateArr[0];
      const month = DateArr[1];
      const day = DateArr[2];

      getLunarInfo(year, month, day);
    }

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
