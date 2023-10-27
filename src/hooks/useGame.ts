import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import IGame from "../interfaces/Game.interface";

const apiClient = new ApiClient<IGame>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 1 * 60 * 60 * 1000, // 1h
  });

export default useGame;
