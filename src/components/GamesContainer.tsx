import GridViewIcon from "@mui/icons-material/GridView";
import ReorderIcon from "@mui/icons-material/Reorder";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import usePlatforms from "../hooks/usePlatforms";

const GamesContainer = () => {
  const [orderBy, setOrderBy] = useState<string>("relevance");
  const [platform, setPlatform] = useState<string>("all");
  const [view, setView] = useState<"list" | "grid">("grid");

  const {
    isError: isGamesError,
    isLoading: isGamesLoading,
    data: games,
  } = useGames();

  const { isError: isPlatformsError, data: platforms } = usePlatforms();

  if (isGamesError || isPlatformsError) {
    return (
      <Typography variant="h6" color="red">
        Something went wrong. Please try again later
      </Typography>
    );
  }

  return (
    <Box sx={{ flexGrow: 5 }}>
      <Typography variant="h2" component="div" fontWeight={900}>
        New and Trending
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        marginTop={2}
        gap={{ xs: 2, md: 0 }}
      >
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Order By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderBy}
              label="Order By"
              onChange={(event: SelectChangeEvent) =>
                setOrderBy(event.target.value)
              }
            >
              <MenuItem value={"relevance"}>Relevance</MenuItem>
              <MenuItem value={"released"}>Release Date</MenuItem>
              <MenuItem value={"added"}>Date Added</MenuItem>
              <MenuItem value={"rating"}>Average Rating</MenuItem>
              <MenuItem value={"metacritic"}>Popularity</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="parent_platform_label">Platform</InputLabel>
            <Select
              labelId="parent_platform_label"
              id="parent_platform"
              value={platform}
              label="Platform"
              onChange={(event: SelectChangeEvent) =>
                setPlatform(event.target.value)
              }
            >
              <MenuItem value={"all"}>All</MenuItem>
              {platforms?.results.map((p) => (
                <MenuItem key={p.slug} value={p.slug}>
                  {p.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <ToggleButtonGroup
          //   sx={{ display: { xs: "none", md: "block" } }}
          orientation="horizontal"
          value={view}
          exclusive
          onChange={(_event: React.MouseEvent, value: string) =>
            setView(value == "list" ? "list" : "grid")
          }
        >
          <ToggleButton value="grid" aria-label="list">
            <GridViewIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="module">
            <ReorderIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {view === "grid" && (
        <Grid
          container
          rowGap={4}
          columnGap={2}
          marginTop={3}
          justifyContent="space-around"
        >
          {isGamesLoading == false
            ? games?.results.map((game) => {
                return <GameCard key={game.id} game={game} />;
              })
            : [...Array(20)].map((_num, i: number) => {
                return <GameCardSkeleton key={i} />;
              })}
        </Grid>
      )}

      {view === "list" && (
        <Stack direction="column" gap={5} marginTop={3} alignItems="center">
          {isGamesLoading == false
            ? games?.results.map((game) => {
                return <GameCard key={game.id} game={game} view={view} />;
              })
            : [...Array(20)].map((_num, i: number) => {
                return <GameCardSkeleton key={i} />;
              })}
        </Stack>
      )}
    </Box>
  );
};
export default GamesContainer;
