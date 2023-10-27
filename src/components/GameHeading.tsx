import Typography from "@mui/material/Typography";
import useGameQueryStore from "../state/GameQueryStore";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const platform = usePlatforms().data?.results.find(
    (p) => p.id === platformId
  );
  const genre = useGenres().data?.results.find((g) => g.id === genreId);

  let heading = "New and Trending";

  if (platform?.name && genre?.name)
    heading = `${genre?.name} Games for ${platform?.name}`;
  else if (platform?.name || genre?.name)
    heading = `${platform?.name || genre?.name} Games`;

  return (
    <Typography variant="h2" component="div" fontWeight={900}>
      {heading}
    </Typography>
  );
};

export default GameHeading;
