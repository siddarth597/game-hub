import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import IGame from "../interfaces/Game.interface";
import IGameQuery from "../interfaces/GameQuery.interface";

const apiClient = new ApiClient<IGame>("/games");

const useGames = (gameQuery: IGameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          search: gameQuery?.search ? gameQuery.search : undefined,
          parent_platforms: gameQuery?.platformId
            ? gameQuery.platformId
            : undefined,
          genres: gameQuery?.genreId ? gameQuery.genreId : undefined,
          ordering: gameQuery?.orderBy ? gameQuery.orderBy : undefined,
          page: pageParam,
          page_size: 24,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 1 * 60 * 60 * 1000, // 1h
  });

export default useGames;
