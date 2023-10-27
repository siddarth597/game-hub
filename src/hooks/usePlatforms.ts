import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import IPlatform from "../interfaces/Platform.interface";

const apiClient = new ApiClient<IPlatform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["parent_platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
