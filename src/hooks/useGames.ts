import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import IGame from "../interfaces/Game.interface";

const apiClient = new ApiClient<IGame>("/games");

const useGames = () =>
  useInfiniteQuery({
    queryKey: ["games"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          page_size: 24,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
