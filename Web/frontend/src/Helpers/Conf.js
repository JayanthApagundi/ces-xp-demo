import Axios from "axios";

export const getConf = () => {
  return Axios.get(`http://localhost:4000/api/conference/get-conferences`)
    .then((data) => data.data).catch((err) => err);
};
