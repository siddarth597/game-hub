import { Box, Chip, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Platforms from "./Platforms";
import GameDescriptionItem from "./GameDescriptionItem";

const GameDetail = () => {
  const { slug } = useParams();

  const { isError, data: game, isLoading } = useGame(slug!);

  if (isLoading) {
    return (
      <Box>
        <Stack marginY={3} direction="row" gap={2}>
          <Skeleton variant="rectangular" height={20} width={40} />
          <Skeleton variant="rectangular" height={20} width={80} />
        </Stack>

        <Skeleton variant="rectangular" height={70} />

        <Stack marginY={3} direction="row" gap={2}>
          <Skeleton variant="rectangular" height={20} />
          <Skeleton variant="rectangular" height={20} />
          <Skeleton variant="rectangular" height={20} />
        </Stack>
      </Box>
    );
  }
  if (!game || !slug || isError) {
    return <Typography>No Game found</Typography>;
  }

  return (
    <Box>
      <Stack marginY={3} direction="row" gap={3} alignItems="center">
        <Chip label={game.released} variant="outlined" />
        <Platforms
          platforms={game?.parent_platforms?.map((p) => {
            return p?.platform?.slug;
          })}
        />
        {game?.playtime && (
          <Typography fontSize={14} letterSpacing={2}>
            AVERAGE PLAYTIME: {game.playtime} HOURS
          </Typography>
        )}
      </Stack>
      <Typography variant="h2" component="div" fontWeight={700}>
        {game.name}
      </Typography>
      <Typography>{game.description_raw}</Typography>

      <Grid
        container
        columns={{ xs: 2 }}
        columnSpacing={{ xs: 10, md: 20, l: 30 }}
      >
        <Grid item>
          <GameDescriptionItem term="PLATFORMS">
            {game?.parent_platforms?.map((p) => {
              return (
                <Typography key={p?.platform?.id}>
                  {p?.platform?.name}
                </Typography>
              );
            })}
          </GameDescriptionItem>

          <GameDescriptionItem term="GENRE">
            {game?.genres?.map((g) => {
              return <Typography key={g?.id}>{g?.name}</Typography>;
            })}
          </GameDescriptionItem>

          <GameDescriptionItem term="RELEASE DATE">
            <Typography>{game?.released}</Typography>
          </GameDescriptionItem>
        </Grid>

        <Grid item>
          <GameDescriptionItem term="METASCORE">
            <Chip
              label={`${game?.metacritic}`}
              color="success"
              variant="outlined"
            />
          </GameDescriptionItem>

          <GameDescriptionItem term="PUBLISHER">
            {game?.publishers?.map((p) => {
              return <Typography key={p?.id}>{p?.name}</Typography>;
            })}
          </GameDescriptionItem>

          <GameDescriptionItem term="RATING">
            <Typography>
              {game?.rating}/{game?.rating_top}
            </Typography>
          </GameDescriptionItem>
        </Grid>
      </Grid>
    </Box>
  );
};
export default GameDetail;
