import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Chukmoon from "../../Components/Chukmoon";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
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
  const [Name, setName] = useState(null);
  const [Date, setDate] = useState(null);
  const [Relation, setRelation] = useState(null);
  const [FamilyOrigin, setFamilyOrigin] = useState(null);
  const [Loading, setLoading] = useState(false);

  const WriteChukmoon = () => {
    setLoading(true);

    console.log(Name);
    console.log(Date);
    console.log(Relation);
    console.log(FamilyOrigin);

    if (Date != null) {
      const DateArr = Date.split("-");
      const year = DateArr[0];
      const month = DateArr[1];
      const day = DateArr[2];

      getLunarInfo(year, month, day);
    }

    setLoading(false);
  };

  return (
    <Container fluid style={{ backgroundColor: "#e5e4e9" }}>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={10} sm={10} md={6} style={{ margin: 32 }}>
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
        <Col xs={10} sm={10} md={4} style={{ padding: 16 }}>
          <form>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor="my-input">
                제주 이름 (성 제외, 한글 또는 한자)
              </InputLabel>
              <Input onChange={(e) => setName(e.target.value)} />
              <TextField
                label="제사지내는 날짜 (양력)"
                type="date"
                defaultValue={Date}
                style={{ marginTop: 16 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setDate(e.target.value)}
              />
              <FormHelperText>
                입력범위 : 1391년 2월 5일 ∼ 2050년 12월 31일
              </FormHelperText>
              <Autocomplete
                options={RelationData}
                getOptionLabel={(option) => option.label}
                style={{ marginTop: 16 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="제주와의 관계를 선택해주세요."
                    variant="outlined"
                  />
                )}
                onChange={(event, value) => setRelation(value)}
              />
              <Autocomplete
                options={NameData}
                getOptionLabel={(option) => option.label}
                style={{ marginTop: 16 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="본관을 선택해주세요."
                    variant="outlined"
                  />
                )}
                onChange={(event, value) => setFamilyOrigin(value)}
              />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 16 }}
              onClick={WriteChukmoon}
            >
              축문 작성하기
            </Button>
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
