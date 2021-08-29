import axios from "axios";

const APIKEY =
  "46roSyJOGPlfcxOQXP6ZTEhFi77bUrUXbEKo//5aSiQ6hDkxlAJb1bluUNJPX6jPy1xtB3sOaIosryMlpsOsyA==";

const getLunarInfo = (year, month, day) => {
  const URL = `/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?serviceKey=${APIKEY}&solYear=${year}&solMonth=${month}&solDay=${day}`;
  axios
    .get(URL)
    .then((res) => {
      const data = res.data.response.body.items.item;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getLunarInfo;
