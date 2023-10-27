import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "b946198f23334f8f9f37fcf4e2d939a6",
  },
});
