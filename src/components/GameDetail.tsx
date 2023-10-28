import {
  Box,
  Chip,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import GameDescriptionItem from "./GameDescriptionItem";
import Platforms from "./Platforms";
import GameScreenshots from "./GameScreenshots";
import ExpandableText from "./ExpandableText";

const GameDetail = () => {
  const { slug } = useParams();

  const { isError, data: game, isLoading } = useGame(slug!);

  if (isLoading) {
    return (
      <Box width="100%">
        <Stack marginY={3} direction="row" gap={2}>
          <Skeleton variant="rectangular" height={20} width={40} />
          <Skeleton variant="rectangular" height={20} width={80} />
        </Stack>
        <Stack width="100%" direction="row" gap={5}>
          <Box flexGrow={1}>
            <Skeleton variant="text" height={70} />

            <Stack marginY={3} direction="column" gap={2}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Stack>
          </Box>

          <Box flexGrow={1}>
            <Box width="100%">
              <Skeleton variant="rectangular" height={250} />
            </Box>
          </Box>
        </Stack>
      </Box>
    );
  }
  if (!game || !slug || isError) {
    return <Typography>No Game found</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <>
        <Stack
          marginY={3}
          direction="row"
          gap={3}
          alignItems="center"
          flexWrap="wrap"
        >
          {game?.released && (
            <Chip
              label={
                game?.released ? new Date(game?.released).toDateString() : "-"
              }
              variant="outlined"
            />
          )}
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
      </>

      <Stack
        direction={{ xs: "column", md: "row-reverse" }}
        gap={{ xs: 3, md: 10 }}
      >
        <GameScreenshots slug={slug} />

        <Box flexGrow={1}>
          {game.description_raw && (
            <ExpandableText text={game.description_raw} />
          )}
          <Stack width="80%" direction="row" justifyContent="space-between">
            <Box>
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
                <Typography>
                  {game?.released
                    ? new Date(game?.released).toDateString()
                    : "-"}
                </Typography>
              </GameDescriptionItem>
            </Box>

            <Box>
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
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
export default GameDetail;
