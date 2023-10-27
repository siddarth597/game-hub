import { create } from "zustand";
import IGameQuery from "../interfaces/GameQuery.interface";

interface GameQueryStore {
  gameQuery: IGameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSearch: (searchQuery: string | null) => void;
  setOrder: (orderBy: string) => void;
  reset: () => void;
}

const DEFAULT_SEARCH_VALUE = null;
const DEFAULT_PLATFORM_ID = 0;
const DEFAULT_ORDER_BY = "relevance";
const DEFAULT_GENRE_ID = 0;

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    search: DEFAULT_SEARCH_VALUE,
    platformId: DEFAULT_PLATFORM_ID,
    orderBy: DEFAULT_ORDER_BY,
    genreId: DEFAULT_GENRE_ID,
  },

  setGenre: (genreId: number) =>
    set(() => ({
      gameQuery: {
        search: DEFAULT_SEARCH_VALUE,
        platformId: DEFAULT_PLATFORM_ID,
        orderBy: DEFAULT_ORDER_BY,
        genreId,
      },
    })),

  setPlatform: (platformId: number) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformId,
      },
    })),

  setSearch: (searchQuery: string | null) =>
    set(() => ({
      gameQuery: {
        search: searchQuery,
        platformId: DEFAULT_PLATFORM_ID,
        orderBy: DEFAULT_ORDER_BY,
        genreId: DEFAULT_GENRE_ID,
      },
    })),

  setOrder: (orderBy: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, orderBy } })),

  reset: () =>
    set(() => ({
      gameQuery: {
        search: DEFAULT_SEARCH_VALUE,
        platformId: DEFAULT_PLATFORM_ID,
        orderBy: DEFAULT_ORDER_BY,
        genreId: DEFAULT_GENRE_ID,
      },
    })),
}));

export default useGameQueryStore;
