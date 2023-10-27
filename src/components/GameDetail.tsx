import { Box, Chip, Skeleton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Platforms from "./Platforms";

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
      <Stack marginY={3} direction="row" gap={2}>
        <Chip label={game.released} variant="outlined" />
        <Platforms
          platforms={game?.parent_platforms?.map((p) => {
            return p?.platform?.slug;
          })}
        />
      </Stack>
      <Typography variant="h2" component="div" fontWeight={700}>
        {game.name}
      </Typography>
      <Typography>{game.description_raw}</Typography>
    </Box>
  );
};
export default GameDetail;
