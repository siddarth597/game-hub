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
    key: import.meta.env.VITE_API_KEY,
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
