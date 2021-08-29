import axios from "axios";

const APIKEY =
  "46roSyJOGPlfcxOQXP6ZTEhFi77bUrUXbEKo//5aSiQ6hDkxlAJb1bluUNJPX6jPy1xtB3sOaIosryMlpsOsyA==";

const getLunarInfo = async (year, month, day) => {
  const URL = `/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo?serviceKey=${APIKEY}&solYear=${year}&solMonth=${month}&solDay=${day}`;
  try {
    const res = await axios.get(URL);
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};

export default getLunarInfo;
