import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import IGenre from "../interfaces/Genre.interface";

const apiClient = new ApiClient<IGenre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGenres;
