import axios, { AxiosRequestConfig } from "axios";

interface IFetchResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b946198f23334f8f9f37fcf4e2d939a6",
  },
});

class ApiClient<T> {
  constructor(private endpoint: string) {}

  // to avoid having problems accessing "this" use arrow functions syntax
  getAll = (config: AxiosRequestConfig = {}) => {
    return axiosInstance
      .get<IFetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
