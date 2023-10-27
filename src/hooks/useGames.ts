import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import IGame from "../interfaces/Game.interface";

const apiClient = new ApiClient<IGame>("/games");

const useGames = () =>
  useQuery({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
  });

export default useGames;
