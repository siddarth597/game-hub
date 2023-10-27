export default interface IGenre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface IGenreResponse {
  count: number;
  next: string;
  previous: string;
  results: IGenre[];
}
