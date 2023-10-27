export default interface IGameQuery {
  genreId?: number;
  platformId?: number;
  search?: string | null;
  orderBy?: string;
}
