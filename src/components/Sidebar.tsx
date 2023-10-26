import { Box, Stack, Typography } from "@mui/material";

const GENRES = [
  {
    id: 4,
    name: "Action",
    slug: "action",
    games_count: 175013,
    image_background:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 20143,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19415,
      },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15926,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15911,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 15466,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 15199,
      },
    ],
  },
  {
    id: 51,
    name: "Indie",
    slug: "indie",
    games_count: 56482,
    image_background:
      "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg",
    games: [
      { id: 1030, slug: "limbo", name: "Limbo", added: 12916 },
      { id: 422, slug: "terraria", name: "Terraria", added: 11825 },
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11814,
      },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 10276,
      },
      { id: 3612, slug: "hotline-miami", name: "Hotline Miami", added: 9937 },
      { id: 3790, slug: "outlast", name: "Outlast", added: 9852 },
    ],
  },
  {
    id: 3,
    name: "Adventure",
    slug: "adventure",
    games_count: 134744,
    image_background:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        added: 20143,
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19415,
      },
      {
        id: 5286,
        slug: "tomb-raider",
        name: "Tomb Raider (2013)",
        added: 15911,
      },
      { id: 13536, slug: "portal", name: "Portal", added: 15554 },
      {
        id: 28,
        slug: "red-dead-redemption-2",
        name: "Red Dead Redemption 2",
        added: 14678,
      },
      {
        id: 3439,
        slug: "life-is-strange-episode-1-2",
        name: "Life is Strange",
        added: 14479,
      },
    ],
  },
  {
    id: 5,
    name: "RPG",
    slug: "role-playing-games-rpg",
    games_count: 53581,
    image_background:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    games: [
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        added: 19415,
      },
      {
        id: 5679,
        slug: "the-elder-scrolls-v-skyrim",
        name: "The Elder Scrolls V: Skyrim",
        added: 15199,
      },
      { id: 802, slug: "borderlands-2", name: "Borderlands 2", added: 14484 },
      {
        id: 58175,
        slug: "god-of-war-2",
        name: "God of War (2018)",
        added: 12886,
      },
      { id: 3070, slug: "fallout-4", name: "Fallout 4", added: 12828 },
      {
        id: 278,
        slug: "horizon-zero-dawn",
        name: "Horizon Zero Dawn",
        added: 12131,
      },
    ],
  },
  {
    id: 10,
    name: "Strategy",
    slug: "strategy",
    games_count: 53789,
    image_background:
      "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg",
    games: [
      {
        id: 13633,
        slug: "civilization-v",
        name: "Sid Meier's Civilization V",
        added: 8933,
      },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8876,
      },
      {
        id: 13910,
        slug: "xcom-enemy-unknown",
        name: "XCOM: Enemy Unknown",
        added: 7904,
      },
      { id: 5525, slug: "brutal-legend", name: "Brutal Legend", added: 7836 },
      {
        id: 10065,
        slug: "cities-skylines",
        name: "Cities: Skylines",
        added: 7790,
      },
      {
        id: 11147,
        slug: "ark-survival-of-the-fittest",
        name: "ARK: Survival Of The Fittest",
        added: 7633,
      },
    ],
  },
  {
    id: 2,
    name: "Shooter",
    slug: "shooter",
    games_count: 59390,
    image_background:
      "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
    games: [
      { id: 4200, slug: "portal-2", name: "Portal 2", added: 18294 },
      {
        id: 4291,
        slug: "counter-strike-global-offensive",
        name: "Counter-Strike: Global Offensive",
        added: 15926,
      },
      {
        id: 12020,
        slug: "left-4-dead-2",
        name: "Left 4 Dead 2",
        added: 15466,
      },
      {
        id: 4062,
        slug: "bioshock-infinite",
        name: "BioShock Infinite",
        added: 14677,
      },
      { id: 802, slug: "borderlands-2", name: "Borderlands 2", added: 14484 },
      { id: 13537, slug: "half-life-2", name: "Half-Life 2", added: 13841 },
    ],
  },
  {
    id: 40,
    name: "Casual",
    slug: "casual",
    games_count: 47319,
    image_background:
      "https://media.rawg.io/media/games/bbf/bbf8d74ab64440ad76294cff2f4d9cfa.jpg",
    games: [
      { id: 9721, slug: "garrys-mod", name: "Garry's Mod", added: 9195 },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 8112,
      },
      { id: 9830, slug: "brawlhalla", name: "Brawlhalla", added: 7073 },
      { id: 356714, slug: "among-us", name: "Among Us", added: 6746 },
      {
        id: 1959,
        slug: "goat-simulator",
        name: "Goat Simulator",
        added: 6029,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5646,
      },
    ],
  },
  {
    id: 14,
    name: "Simulation",
    slug: "simulation",
    games_count: 66931,
    image_background:
      "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
    games: [
      { id: 10035, slug: "hitman", name: "Hitman", added: 10123 },
      {
        id: 654,
        slug: "stardew-valley",
        name: "Stardew Valley",
        added: 9354,
      },
      { id: 9721, slug: "garrys-mod", name: "Garry's Mod", added: 9195 },
      {
        id: 10243,
        slug: "company-of-heroes-2",
        name: "Company of Heroes 2",
        added: 8876,
      },
      {
        id: 9882,
        slug: "dont-starve-together",
        name: "Don't Starve Together",
        added: 8660,
      },
      { id: 22509, slug: "minecraft", name: "Minecraft", added: 7987 },
    ],
  },
  {
    id: 7,
    name: "Puzzle",
    slug: "puzzle",
    games_count: 97177,
    image_background:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    games: [
      { id: 4200, slug: "portal-2", name: "Portal 2", added: 18294 },
      { id: 13536, slug: "portal", name: "Portal", added: 15554 },
      { id: 1030, slug: "limbo", name: "Limbo", added: 12916 },
      {
        id: 19709,
        slug: "half-life-2-episode-two",
        name: "Half-Life 2: Episode Two",
        added: 10322,
      },
      { id: 1450, slug: "inside", name: "INSIDE", added: 7558 },
      {
        id: 3853,
        slug: "trine-2-complete-story",
        name: "Trine 2: Complete Story",
        added: 6909,
      },
    ],
  },
  {
    id: 11,
    name: "Arcade",
    slug: "arcade",
    games_count: 22585,
    image_background:
      "https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg",
    games: [
      { id: 3612, slug: "hotline-miami", name: "Hotline Miami", added: 9937 },
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 9036,
      },
      { id: 22509, slug: "minecraft", name: "Minecraft", added: 7987 },
      { id: 4003, slug: "grid-2", name: "GRID 2", added: 7127 },
      {
        id: 3408,
        slug: "hotline-miami-2-wrong-number",
        name: "Hotline Miami 2: Wrong Number",
        added: 5816,
      },
      {
        id: 16343,
        slug: "a-story-about-my-uncle",
        name: "A Story About My Uncle",
        added: 5646,
      },
    ],
  },
  {
    id: 83,
    name: "Platformer",
    slug: "platformer",
    games_count: 100682,
    image_background:
      "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg",
    games: [
      { id: 1030, slug: "limbo", name: "Limbo", added: 12916 },
      { id: 422, slug: "terraria", name: "Terraria", added: 11825 },
      {
        id: 9767,
        slug: "hollow-knight",
        name: "Hollow Knight",
        added: 10276,
      },
      {
        id: 41,
        slug: "little-nightmares",
        name: "Little Nightmares",
        added: 10192,
      },
      {
        id: 3144,
        slug: "super-meat-boy",
        name: "Super Meat Boy",
        added: 8979,
      },
      {
        id: 28179,
        slug: "sega-mega-drive-and-genesis-classics",
        name: "SEGA Mega Drive and Genesis Classics",
        added: 7677,
      },
    ],
  },
  {
    id: 59,
    name: "Massively Multiplayer",
    slug: "massively-multiplayer",
    games_count: 3375,
    image_background:
      "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg",
    games: [
      { id: 32, slug: "destiny-2", name: "Destiny 2", added: 12928 },
      { id: 10213, slug: "dota-2", name: "Dota 2", added: 11728 },
      { id: 766, slug: "warframe", name: "Warframe", added: 11625 },
      {
        id: 290856,
        slug: "apex-legends",
        name: "Apex Legends",
        added: 10426,
      },
      {
        id: 10533,
        slug: "path-of-exile",
        name: "Path of Exile",
        added: 9366,
      },
      {
        id: 10142,
        slug: "playerunknowns-battlegrounds",
        name: "PlayerUnknown’s Battlegrounds",
        added: 9224,
      },
    ],
  },
  {
    id: 1,
    name: "Racing",
    slug: "racing",
    games_count: 24236,
    image_background:
      "https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11814,
      },
      { id: 4003, slug: "grid-2", name: "GRID 2", added: 7127 },
      { id: 2572, slug: "dirt-rally", name: "DiRT Rally", added: 6408 },
      {
        id: 58753,
        slug: "forza-horizon-4",
        name: "Forza Horizon 4",
        added: 5764,
      },
      { id: 5578, slug: "grid", name: "Race Driver: Grid", added: 5209 },
      {
        id: 19491,
        slug: "burnout-paradise-the-ultimate-box",
        name: "Burnout Paradise: The Ultimate Box",
        added: 4494,
      },
    ],
  },
  {
    id: 15,
    name: "Sports",
    slug: "sports",
    games_count: 20841,
    image_background:
      "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
    games: [
      {
        id: 3272,
        slug: "rocket-league",
        name: "Rocket League",
        added: 11814,
      },
      {
        id: 326292,
        slug: "fall-guys",
        name: "Fall Guys: Ultimate Knockout",
        added: 8112,
      },
      { id: 2572, slug: "dirt-rally", name: "DiRT Rally", added: 6408 },
      {
        id: 53341,
        slug: "jet-set-radio-2012",
        name: "Jet Set Radio",
        added: 4935,
      },
      { id: 9575, slug: "vrchat", name: "VRChat", added: 4318 },
      {
        id: 622492,
        slug: "forza-horizon-5",
        name: "Forza Horizon 5",
        added: 4272,
      },
    ],
  },
  {
    id: 6,
    name: "Fighting",
    slug: "fighting",
    games_count: 11718,
    image_background:
      "https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg",
    games: [
      {
        id: 17540,
        slug: "injustice-gods-among-us-ultimate-edition",
        name: "Injustice: Gods Among Us Ultimate Edition",
        added: 9036,
      },
      {
        id: 108,
        slug: "mortal-kombat-x",
        name: "Mortal Kombat X",
        added: 8341,
      },
      {
        id: 28179,
        slug: "sega-mega-drive-and-genesis-classics",
        name: "SEGA Mega Drive and Genesis Classics",
        added: 7677,
      },
      { id: 9830, slug: "brawlhalla", name: "Brawlhalla", added: 7073 },
      {
        id: 274480,
        slug: "mortal-kombat-11",
        name: "Mortal Kombat 11",
        added: 5068,
      },
      {
        id: 44525,
        slug: "yakuza-kiwami",
        name: "Yakuza Kiwami",
        added: 4292,
      },
    ],
  },
  {
    id: 19,
    name: "Family",
    slug: "family",
    games_count: 5392,
    image_background:
      "https://media.rawg.io/media/games/694/6940fa3fbe0d836e4a272c468e65e480.jpg",
    games: [
      { id: 3254, slug: "journey", name: "Journey", added: 8088 },
      {
        id: 2597,
        slug: "lego-lord-of-the-rings",
        name: "LEGO The Lord of the Rings",
        added: 5228,
      },
      { id: 3350, slug: "broken-age", name: "Broken Age", added: 4826 },
      {
        id: 3729,
        slug: "lego-the-hobbit",
        name: "LEGO The Hobbit",
        added: 4795,
      },
      { id: 1259, slug: "machinarium", name: "Machinarium", added: 4330 },
      { id: 1140, slug: "world-of-goo", name: "World of Goo", added: 4247 },
    ],
  },
  {
    id: 28,
    name: "Board Games",
    slug: "board-games",
    games_count: 8345,
    image_background:
      "https://media.rawg.io/media/games/0e7/0e7582dda5530d5b95f877dfad57e6ba.jpg",
    games: [
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4511,
      },
      {
        id: 327999,
        slug: "dota-underlords",
        name: "Dota Underlords",
        added: 3806,
      },
      {
        id: 2055,
        slug: "adventure-capitalist",
        name: "AdVenture Capitalist",
        added: 3185,
      },
      { id: 758, slug: "hue", name: "Hue", added: 2196 },
      { id: 2306, slug: "poker-night-2", name: "Poker Night 2", added: 1991 },
      { id: 3187, slug: "armello", name: "Armello", added: 1919 },
    ],
  },
  {
    id: 34,
    name: "Educational",
    slug: "educational",
    games_count: 15652,
    image_background:
      "https://media.rawg.io/media/screenshots/31c/31c38375c184be8ee616c7df5cff8e0d.jpg",
    games: [
      {
        id: 1358,
        slug: "papers-please",
        name: "Papers, Please",
        added: 6476,
      },
      { id: 1140, slug: "world-of-goo", name: "World of Goo", added: 4247 },
      {
        id: 2778,
        slug: "surgeon-simulator-cpr",
        name: "Surgeon Simulator",
        added: 3754,
      },
      { id: 9768, slug: "gameguru", name: "GameGuru", added: 2412 },
      {
        id: 13777,
        slug: "sid-meiers-civilization-iv-colonization",
        name: "Sid Meier's Civilization IV: Colonization",
        added: 2212,
      },
      {
        id: 6885,
        slug: "pirates-3",
        name: "Sid Meier's Pirates!",
        added: 2130,
      },
    ],
  },
  {
    id: 17,
    name: "Card",
    slug: "card",
    games_count: 4519,
    image_background:
      "https://media.rawg.io/media/screenshots/bf8/bf87ef7d08a80006f0f65df6d30174e6.jpg",
    games: [
      {
        id: 28121,
        slug: "slay-the-spire",
        name: "Slay the Spire",
        added: 4535,
      },
      {
        id: 23557,
        slug: "gwent-the-witcher-card-game",
        name: "Gwent: The Witcher Card Game",
        added: 4511,
      },
      {
        id: 18852,
        slug: "poker-night-at-the-inventory",
        name: "Poker Night at the Inventory",
        added: 2651,
      },
      { id: 8923, slug: "faeria", name: "Faeria", added: 2076 },
      {
        id: 332,
        slug: "the-elder-scrolls-legends",
        name: "The Elder Scrolls: Legends",
        added: 2042,
      },
      { id: 2306, slug: "poker-night-2", name: "Poker Night 2", added: 1991 },
    ],
  },
];

const Sidebar = () => {
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
    >
      <Typography variant="h5" component="div" fontWeight={900}>
        Genres
      </Typography>

      <Stack gap={2} marginTop={2}>
        {GENRES.map((genre) => (
          <Stack
            key={genre.id}
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
        ))}
      </Stack>
    </Box>
  );
};
export default Sidebar;
