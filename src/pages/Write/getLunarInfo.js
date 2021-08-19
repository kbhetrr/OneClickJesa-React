import axios from "axios";

const getLunarInfo = (year, month, day) => {
  const URL = `/life/solc?yyyy=${year}&mm=${month}&dd=${day}`;
  axios
    .get(URL)
    .then((res) => {
      const data = res.data;
      console.log(
        `양력날짜 : ${data.SOLC_YYYY}년 ${data.SOLC_MM}월 ${data.SOLC_DD}일`
      );
      console.log(
        `음력날짜 : ${data.LUNC_YYYY}년 ${data.LUNC_MM}월 ${data.LUNC_DD}일`
      );
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getLunarInfo;
