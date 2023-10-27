import { Box, Skeleton, Stack, Typography } from "@mui/material";
import IGenre from "../interfaces/Genre.interface";
import { useState } from "react";

const GENRES = [
  {
    id: 4,
    name: "Action",
    slug: "action",
    games_count: 175013,
    image_background:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
  },
  {
    id: 51,
    name: "Indie",
    slug: "indie",
    games_count: 56482,
    image_background:
      "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg",
  },
  {
    id: 3,
    name: "Adventure",
    slug: "adventure",
    games_count: 134744,
    image_background:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
  },
  {
    id: 5,
    name: "RPG",
    slug: "role-playing-games-rpg",
    games_count: 53581,
    image_background:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
  },
  {
    id: 10,
    name: "Strategy",
    slug: "strategy",
    games_count: 53789,
    image_background:
      "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg",
  },
  {
    id: 2,
    name: "Shooter",
    slug: "shooter",
    games_count: 59390,
    image_background:
      "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
  },
  {
    id: 40,
    name: "Casual",
    slug: "casual",
    games_count: 47319,
    image_background:
      "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg",
  },
  {
    id: 14,
    name: "Simulation",
    slug: "simulation",
    games_count: 66931,
    image_background:
      "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
  },
  {
    id: 7,
    name: "Puzzle",
    slug: "puzzle",
    games_count: 97177,
    image_background:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
  },
  {
    id: 11,
    name: "Arcade",
    slug: "arcade",
    games_count: 22585,
    image_background:
      "https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg",
  },
  {
    id: 83,
    name: "Platformer",
    slug: "platformer",
    games_count: 100682,
    image_background:
      "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
  },
  {
    id: 59,
    name: "Massively Multiplayer",
    slug: "massively-multiplayer",
    games_count: 3375,
    image_background:
      "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg",
  },
  {
    id: 1,
    name: "Racing",
    slug: "racing",
    games_count: 24236,
    image_background:
      "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
  },
  {
    id: 15,
    name: "Sports",
    slug: "sports",
    games_count: 20841,
    image_background:
      "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
  },
  {
    id: 6,
    name: "Fighting",
    slug: "fighting",
    games_count: 11718,
    image_background:
      "https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg",
  },
  {
    id: 19,
    name: "Family",
    slug: "family",
    games_count: 5392,
    image_background:
      "https://media.rawg.io/media/games/694/6940fa3fbe0d836e4a272c468e65e480.jpg",
  },
  {
    id: 28,
    name: "Board Games",
    slug: "board-games",
    games_count: 8345,
    image_background:
      "https://media.rawg.io/media/games/0e7/0e7582dda5530d5b95f877dfad57e6ba.jpg",
  },
  {
    id: 34,
    name: "Educational",
    slug: "educational",
    games_count: 15652,
    image_background:
      "https://media.rawg.io/media/screenshots/31c/31c38375c184be8ee616c7df5cff8e0d.jpg",
  },
  {
    id: 17,
    name: "Card",
    slug: "card",
    games_count: 4519,
    image_background:
      "https://media.rawg.io/media/screenshots/bf8/bf87ef7d08a80006f0f65df6d30174e6.jpg",
  },
];

const SidebarItem = ({ genre }: { genre: IGenre }) => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      justifyContent="flex-start"
    >
      <img
        src={genre.image_background}
        alt={genre.name}
        height="30px"
        width="30px"
      />
      <Typography component="div" sx={{ fontSize: "1rem" }}>
        {genre.name}
      </Typography>
    </Stack>
  );
};

const SidebarItemSkeleton = () => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      justifyContent="flex-start"
    >
      <Skeleton variant="rounded" width={30} height={30} />
      <Skeleton variant="rounded" width={90} height={30} />
    </Stack>
  );
};

const Sidebar = () => {
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  setInterval(() => {
    setIsDataLoaded(true);
  }, 2000);

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "fit-content",
      }}
      display={{ xs: "none", md: "block" }}
      position="sticky"
      marginTop={2}
      top={5}
      maxWidth={120}
    >
      <Typography variant="h5" component="div" fontWeight={900}>
        Genres
      </Typography>

      <Stack gap={2} marginTop={2}>
        {GENRES.map((genre) => {
          if (isDataLoaded) return <SidebarItem key={genre.id} genre={genre} />;
          else return <SidebarItemSkeleton key={genre.id} />;
        })}
      </Stack>
    </Box>
  );
};
export default Sidebar;
