import GridViewIcon from "@mui/icons-material/GridView";
import ReorderIcon from "@mui/icons-material/Reorder";
import {
  Box,
  Button,
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
import React, { useState } from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../state/GameQueryStore";

const GamesContainer = () => {
  const { setOrder, setPlatform } = useGameQueryStore();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const orderBy = useGameQueryStore((s) => s.gameQuery.orderBy);

  const [view, setView] = useState<"list" | "grid">("grid");

  const {
    isError: isGamesError,
    isLoading: isGamesLoading,
    data: games,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
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
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          sx={{ width: { xs: "100%", md: "fit-content" } }}
        >
          <FormControl
            sx={{ minWidth: 120, width: { xs: "100%", md: "fit-content" } }}
          >
            <InputLabel id="demo-simple-select-label">Order By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderBy}
              label="Order By"
              onChange={(event: SelectChangeEvent) =>
                setOrder(event.target.value)
              }
            >
              <MenuItem value={"relevance"}>Relevance</MenuItem>
              <MenuItem value={"released"}>Release Date</MenuItem>
              <MenuItem value={"added"}>Date Added</MenuItem>
              <MenuItem value={"rating"}>Average Rating</MenuItem>
              <MenuItem value={"metacritic"}>Popularity</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ minWidth: 120, width: { xs: "100%", md: "fit-content" } }}
          >
            <InputLabel id="parent_platform_label">Platform</InputLabel>
            <Select
              labelId="parent_platform_label"
              id="parent_platform"
              value={`${platformId}`}
              label="Platform"
              onChange={(event: SelectChangeEvent) =>
                setPlatform(parseInt(event.target.value))
              }
            >
              <MenuItem value={"0"}>All</MenuItem>
              {platforms?.results.map((p) => (
                <MenuItem key={p.slug} value={p.id}>
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
            ? games?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page?.results.map((game) => {
                    return <GameCard key={game.id} game={game} view={view} />;
                  })}
                </React.Fragment>
              ))
            : [...Array(20)].map((_num, i: number) => {
                return <GameCardSkeleton key={i} />;
              })}
        </Grid>
      )}

      {view === "list" && (
        <Stack direction="column" gap={5} marginTop={3} alignItems="center">
          {isGamesLoading == false
            ? games?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page?.results.map((game) => {
                    return <GameCard key={game.id} game={game} view={view} />;
                  })}
                </React.Fragment>
              ))
            : [...Array(20)].map((_num, i: number) => {
                return <GameCardSkeleton key={i} />;
              })}
        </Stack>
      )}

      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} sx={{ marginY: 3 }}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};
export default GamesContainer;
