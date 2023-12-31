import IGenre from "./Genre.interface";

export default interface IGame {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  reviews_count: number;
  short_screenshots: {
    id: number;
    image: string;
  }[];
  parent_platforms: {
    platform: { id: number; name: string; slug: string };
  }[];
  description_raw: string;
  genres: IGenre[];
  website_url: string;
  publishers: { id: number; name: string }[];
}

export interface IGameScreenshot {
  id: number;
  image: string;
}
