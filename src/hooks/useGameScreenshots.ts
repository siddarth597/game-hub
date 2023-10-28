import { useQuery } from "@tanstack/react-query";
import { IGameScreenshot } from "../interfaces/Game.interface";
import ApiClient from "../services/api-client";

const useGameScreenshots = (slug: string) => {
  const apiClient = new ApiClient<IGameScreenshot>(
    `/games/${slug}/screenshots`
  );

  return useQuery({
    queryKey: ["games", slug, "screenshots"],
    queryFn: apiClient.getAll,
    staleTime: 1 * 60 * 60 * 1000, // 1h
  });
};

export default useGameScreenshots;
