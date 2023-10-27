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
import ReorderIcon from "@mui/icons-material/Reorder";
import GridViewIcon from "@mui/icons-material/GridView";
import { useState } from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
// import IGame from "../interfaces/Game.interface";

const PARENT_PLATFROMS = [
  {
    id: 1,
    name: "PC",
    slug: "pc",
    platforms: [
      {
        id: 4,
        name: "PC",
        slug: "pc",
        games_count: 518041,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 2,
    name: "PlayStation",
    slug: "playstation",
    platforms: [
      {
        id: 187,
        name: "PlayStation 5",
        slug: "playstation5",
        games_count: 954,
        image_background:
          "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        image: null,
        year_start: 2020,
        year_end: null,
      },
      {
        id: 18,
        name: "PlayStation 4",
        slug: "playstation4",
        games_count: 6731,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 16,
        name: "PlayStation 3",
        slug: "playstation3",
        games_count: 3163,
        image_background:
          "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 15,
        name: "PlayStation 2",
        slug: "playstation2",
        games_count: 2002,
        image_background:
          "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 27,
        name: "PlayStation",
        slug: "playstation1",
        games_count: 1636,
        image_background:
          "https://media.rawg.io/media/games/826/82626e2d7ee7d96656fb9838c2ef7302.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 19,
        name: "PS Vita",
        slug: "ps-vita",
        games_count: 1445,
        image_background:
          "https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 17,
        name: "PSP",
        slug: "psp",
        games_count: 1364,
        image_background:
          "https://media.rawg.io/media/games/694/6940fa3fbe0d836e4a272c468e65e480.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 3,
    name: "Xbox",
    slug: "xbox",
    platforms: [
      {
        id: 1,
        name: "Xbox One",
        slug: "xbox-one",
        games_count: 5559,
        image_background:
          "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 186,
        name: "Xbox Series S/X",
        slug: "xbox-series-x",
        games_count: 820,
        image_background:
          "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
        image: null,
        year_start: 2020,
        year_end: null,
      },
      {
        id: 14,
        name: "Xbox 360",
        slug: "xbox360",
        games_count: 2787,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 80,
        name: "Xbox",
        slug: "xbox-old",
        games_count: 730,
        image_background:
          "https://media.rawg.io/media/games/9d4/9d45e22df640fcb6f4b754aa3491ae09.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 4,
    name: "iOS",
    slug: "ios",
    platforms: [
      {
        id: 3,
        name: "iOS",
        slug: "ios",
        games_count: 77121,
        image_background:
          "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 8,
    name: "Android",
    slug: "android",
    platforms: [
      {
        id: 21,
        name: "Android",
        slug: "android",
        games_count: 52288,
        image_background:
          "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 5,
    name: "Apple Macintosh",
    slug: "mac",
    platforms: [
      {
        id: 5,
        name: "macOS",
        slug: "macos",
        games_count: 102241,
        image_background:
          "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 55,
        name: "Classic Macintosh",
        slug: "macintosh",
        games_count: 675,
        image_background:
          "https://media.rawg.io/media/screenshots/79a/79ab3ca882e351d5423499723bc1890c.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 41,
        name: "Apple II",
        slug: "apple-ii",
        games_count: 423,
        image_background:
          "https://media.rawg.io/media/screenshots/4da/4dadb6e7a52030a3e530b665ecc7fd30.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 6,
    name: "Linux",
    slug: "linux",
    platforms: [
      {
        id: 6,
        name: "Linux",
        slug: "linux",
        games_count: 75643,
        image_background:
          "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 7,
    name: "Nintendo",
    slug: "nintendo",
    platforms: [
      {
        id: 7,
        name: "Nintendo Switch",
        slug: "nintendo-switch",
        games_count: 5344,
        image_background:
          "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 8,
        name: "Nintendo 3DS",
        slug: "nintendo-3ds",
        games_count: 1695,
        image_background:
          "https://media.rawg.io/media/screenshots/ad1/ad15e71b0a3d431ce0a59bcd783efa88.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 9,
        name: "Nintendo DS",
        slug: "nintendo-ds",
        games_count: 2482,
        image_background:
          "https://media.rawg.io/media/games/341/3413d7275fb1e919f00a925df8288b77.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 13,
        name: "Nintendo DSi",
        slug: "nintendo-dsi",
        games_count: 37,
        image_background:
          "https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 10,
        name: "Wii U",
        slug: "wii-u",
        games_count: 1136,
        image_background:
          "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 11,
        name: "Wii",
        slug: "wii",
        games_count: 2241,
        image_background:
          "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 105,
        name: "GameCube",
        slug: "gamecube",
        games_count: 635,
        image_background:
          "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 83,
        name: "Nintendo 64",
        slug: "nintendo-64",
        games_count: 364,
        image_background:
          "https://media.rawg.io/media/games/2b7/2b7252fb74d5db2372144a0fb03812da.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 24,
        name: "Game Boy Advance",
        slug: "game-boy-advance",
        games_count: 953,
        image_background:
          "https://media.rawg.io/media/games/02d/02da3c4a7c5cd335a9d45e24cdf1df6f.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 43,
        name: "Game Boy Color",
        slug: "game-boy-color",
        games_count: 412,
        image_background:
          "https://media.rawg.io/media/games/1cf/1cf9e301f1d27172546dcabc2f6cb597.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 26,
        name: "Game Boy",
        slug: "game-boy",
        games_count: 606,
        image_background:
          "https://media.rawg.io/media/screenshots/a7f/a7f3cb62af2ee95d92065da88583338b.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 79,
        name: "SNES",
        slug: "snes",
        games_count: 957,
        image_background:
          "https://media.rawg.io/media/games/363/363045c496b712600d0ff2dbbae1394c.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 49,
        name: "NES",
        slug: "nes",
        games_count: 981,
        image_background:
          "https://media.rawg.io/media/screenshots/33e/33e9f79f78d1d49e7631d82c59ed32a1.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 9,
    name: "Atari",
    slug: "atari",
    platforms: [
      {
        id: 28,
        name: "Atari 7800",
        slug: "atari-7800",
        games_count: 64,
        image_background:
          "https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 31,
        name: "Atari 5200",
        slug: "atari-5200",
        games_count: 64,
        image_background:
          "https://media.rawg.io/media/screenshots/61a/61a60e3ee55941387681eaa59e3becbf.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 23,
        name: "Atari 2600",
        slug: "atari-2600",
        games_count: 286,
        image_background:
          "https://media.rawg.io/media/screenshots/b12/b12ed274eed80e4aced37badf228d1cf.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 22,
        name: "Atari Flashback",
        slug: "atari-flashback",
        games_count: 30,
        image_background:
          "https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 25,
        name: "Atari 8-bit",
        slug: "atari-8-bit",
        games_count: 307,
        image_background:
          "https://media.rawg.io/media/screenshots/bb2/bb2cc339e686d70604d03659f6022381.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 34,
        name: "Atari ST",
        slug: "atari-st",
        games_count: 836,
        image_background:
          "https://media.rawg.io/media/games/32d/32d851318b042aba3df62e52d868d599.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 46,
        name: "Atari Lynx",
        slug: "atari-lynx",
        games_count: 56,
        image_background:
          "https://media.rawg.io/media/screenshots/575/575b2838392ed177dd7d2c734c682f93.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 50,
        name: "Atari XEGS",
        slug: "atari-xegs",
        games_count: 22,
        image_background:
          "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 112,
        name: "Jaguar",
        slug: "jaguar",
        games_count: 37,
        image_background:
          "https://media.rawg.io/media/games/855/8552687245f888ba388bc6ec0dcc3947.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 10,
    name: "Commodore / Amiga",
    slug: "commodore-amiga",
    platforms: [
      {
        id: 166,
        name: "Commodore / Amiga",
        slug: "commodore-amiga",
        games_count: 2077,
        image_background:
          "https://media.rawg.io/media/screenshots/6ee/6ee4e4960e9b612a0d39c8fcf10c249a.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 11,
    name: "SEGA",
    slug: "sega",
    platforms: [
      {
        id: 167,
        name: "Genesis",
        slug: "genesis",
        games_count: 829,
        image_background:
          "https://media.rawg.io/media/games/f61/f61cc8e0bce08615d90918e428aa5dc9.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 107,
        name: "SEGA Saturn",
        slug: "sega-saturn",
        games_count: 363,
        image_background:
          "https://media.rawg.io/media/games/369/36925f823ec3e9e28a91729c88bf31ec.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 119,
        name: "SEGA CD",
        slug: "sega-cd",
        games_count: 160,
        image_background:
          "https://media.rawg.io/media/screenshots/364/364cb96fad83ff293e6359394a7cc51b.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 117,
        name: "SEGA 32X",
        slug: "sega-32x",
        games_count: 46,
        image_background:
          "https://media.rawg.io/media/screenshots/d9f/d9f308b5d824ae8f047edc0a998a587b.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 74,
        name: "SEGA Master System",
        slug: "sega-master-system",
        games_count: 225,
        image_background:
          "https://media.rawg.io/media/screenshots/cbc/cbca22c381d18a8df6e9361a33f8a899.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 106,
        name: "Dreamcast",
        slug: "dreamcast",
        games_count: 359,
        image_background:
          "https://media.rawg.io/media/games/5b4/5b4af50ce68cf94dcab24f3dba33eaab.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 77,
        name: "Game Gear",
        slug: "game-gear",
        games_count: 219,
        image_background:
          "https://media.rawg.io/media/screenshots/97c/97cd94d7d6d89a12ed562d3a4e40c4a5.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 12,
    name: "3DO",
    slug: "3do",
    platforms: [
      {
        id: 111,
        name: "3DO",
        slug: "3do",
        games_count: 97,
        image_background:
          "https://media.rawg.io/media/screenshots/d8c/d8c399c09701ae2603043a3bb3a0bff5.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 13,
    name: "Neo Geo",
    slug: "neo-geo",
    platforms: [
      {
        id: 12,
        name: "Neo Geo",
        slug: "neogeo",
        games_count: 122,
        image_background:
          "https://media.rawg.io/media/screenshots/dbf/dbfcd081f128ff0d1467beb47ef370a0.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 14,
    name: "Web",
    slug: "web",
    platforms: [
      {
        id: 171,
        name: "Web",
        slug: "web",
        games_count: 260090,
        image_background:
          "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg",
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
];

const GAMES = [
  {
    id: 3498,
    slug: "grand-theft-auto-v",
    name: "Grand Theft Auto V",
    released: "2013-09-17",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    rating: 4.47,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 3937, percent: 59.0 },
      { id: 4, title: "recommended", count: 2190, percent: 32.82 },
      { id: 3, title: "meh", count: 424, percent: 6.35 },
      { id: 1, title: "skip", count: 122, percent: 1.83 },
    ],
    ratings_count: 6575,
    reviews_text_count: 57,
    added: 20143,
    added_by_status: {
      yet: 515,
      owned: 11574,
      beaten: 5683,
      toplay: 597,
      dropped: 1065,
      playing: 709,
    },
    metacritic: 92,
    playtime: 74,
    suggestions_count: 422,
    updated: "2023-10-24T12:03:17",
    user_game: null,
    reviews_count: 6673,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 954,
          image_background:
            "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 820,
          image_background:
            "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: {
          minimum:
            "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
          recommended:
            "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:",
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2013-09-17",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
    ],
    stores: [
      {
        id: 290375,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 438095,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
      {
        id: 290376,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 290377,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
      {
        id: 290378,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 23109,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 6203,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 11295,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 3037,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 809,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 2620,
        image_background:
          "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
      },
      {
        id: 62349,
        name: "vr mod",
        slug: "vr-mod",
        language: "eng",
        games_count: 17,
        image_background:
          "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 1827221,
        image:
          "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
      },
      {
        id: 1827222,
        image:
          "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
      },
      {
        id: 1827223,
        image:
          "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
      },
      {
        id: 1827225,
        image:
          "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
      },
      {
        id: 1827226,
        image:
          "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
      },
      {
        id: 1827227,
        image:
          "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
      },
    ],
  },
  {
    id: 3328,
    slug: "the-witcher-3-wild-hunt",
    name: "The Witcher 3: Wild Hunt",
    released: "2015-05-18",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    rating: 4.66,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 4957, percent: 77.28 },
      { id: 4, title: "recommended", count: 1027, percent: 16.01 },
      { id: 3, title: "meh", count: 269, percent: 4.19 },
      { id: 1, title: "skip", count: 161, percent: 2.51 },
    ],
    ratings_count: 6312,
    reviews_text_count: 70,
    added: 19415,
    added_by_status: {
      yet: 1093,
      owned: 11187,
      beaten: 4629,
      toplay: 751,
      dropped: 897,
      playing: 858,
    },
    metacritic: 92,
    playtime: 46,
    suggestions_count: 671,
    updated: "2023-10-26T10:08:21",
    user_game: null,
    reviews_count: 6414,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 820,
          image_background:
            "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5342,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 954,
          image_background:
            "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        },
        released_at: "2015-05-18",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
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
    ],
    stores: [
      {
        id: 354780,
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
          domain: "gog.com",
          games_count: 5574,
          image_background:
            "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        },
      },
      {
        id: 3565,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 305376,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 312313,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 676022,
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
          domain: "nintendo.com",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 64,
        name: "Fantasy",
        slug: "fantasy",
        language: "eng",
        games_count: 25421,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 6203,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 6041,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 14555,
        image_background:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 44,
        name: "Nudity",
        slug: "nudity",
        language: "eng",
        games_count: 5374,
        image_background:
          "https://media.rawg.io/media/games/858/858c016de0cf7bc21a57dcc698a04a0c.jpg",
      },
      {
        id: 336,
        name: "controller support",
        slug: "controller-support",
        language: "eng",
        games_count: 293,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 145,
        name: "Choices Matter",
        slug: "choices-matter",
        language: "eng",
        games_count: 4082,
        image_background:
          "https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg",
      },
      {
        id: 192,
        name: "Mature",
        slug: "mature",
        language: "eng",
        games_count: 2446,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 40,
        name: "Dark Fantasy",
        slug: "dark-fantasy",
        language: "eng",
        games_count: 3503,
        image_background:
          "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
      },
      {
        id: 66,
        name: "Medieval",
        slug: "medieval",
        language: "eng",
        games_count: 5677,
        image_background:
          "https://media.rawg.io/media/screenshots/2a2/2a2a162a08f2bba053334ecfda25228d.jpg",
      },
      {
        id: 82,
        name: "Magic",
        slug: "magic",
        language: "eng",
        games_count: 8457,
        image_background:
          "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
      },
      {
        id: 218,
        name: "Multiple Endings",
        slug: "multiple-endings",
        language: "eng",
        games_count: 7546,
        image_background:
          "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
      {
        id: 30336,
        image:
          "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
      },
      {
        id: 30337,
        image:
          "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
      },
      {
        id: 30338,
        image:
          "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
      },
      {
        id: 30339,
        image:
          "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
      },
      {
        id: 30340,
        image:
          "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
      },
      {
        id: 30342,
        image:
          "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
      },
    ],
  },
  {
    id: 4200,
    slug: "portal-2",
    name: "Portal 2",
    released: "2011-04-18",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    rating: 4.61,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 3889, percent: 70.25 },
      { id: 4, title: "recommended", count: 1378, percent: 24.89 },
      { id: 3, title: "meh", count: 150, percent: 2.71 },
      { id: 1, title: "skip", count: 119, percent: 2.15 },
    ],
    ratings_count: 5484,
    reviews_text_count: 34,
    added: 18294,
    added_by_status: {
      yet: 604,
      owned: 11300,
      beaten: 5324,
      toplay: 355,
      dropped: 568,
      playing: 143,
    },
    metacritic: 95,
    playtime: 11,
    suggestions_count: 546,
    updated: "2023-10-24T09:18:00",
    user_game: null,
    reviews_count: 5536,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2011-04-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2011-04-18",
        requirements_en: null,
        requirements_ru: {
          minimum:
            "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
          recommended:
            "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2011-04-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2011-04-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2011-04-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2011-04-18",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
    ],
    genres: [
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 7,
        name: "Puzzle",
        slug: "puzzle",
        games_count: 97176,
        image_background:
          "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg",
      },
    ],
    stores: [
      {
        id: 465889,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 13134,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 4526,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 33916,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 23109,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 189,
        name: "Female Protagonist",
        slug: "female-protagonist",
        language: "eng",
        games_count: 11093,
        image_background:
          "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 11295,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 75,
        name: "Local Co-Op",
        slug: "local-co-op",
        language: "eng",
        games_count: 5087,
        image_background:
          "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
      },
      {
        id: 11669,
        name: "stats",
        slug: "stats",
        language: "eng",
        games_count: 4607,
        image_background:
          "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
      },
      {
        id: 40852,
        name: "Steam Workshop",
        slug: "steam-workshop",
        language: "eng",
        games_count: 1356,
        image_background:
          "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
      },
      {
        id: 25,
        name: "Space",
        slug: "space",
        language: "eng",
        games_count: 42077,
        image_background:
          "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg",
      },
      {
        id: 40838,
        name: "Includes level editor",
        slug: "includes-level-editor",
        language: "eng",
        games_count: 1705,
        image_background:
          "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
      },
      {
        id: 40833,
        name: "Captions available",
        slug: "captions-available",
        language: "eng",
        games_count: 1258,
        image_background:
          "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg",
      },
      {
        id: 40834,
        name: "Commentary available",
        slug: "commentary-available",
        language: "eng",
        games_count: 258,
        image_background:
          "https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg",
      },
      {
        id: 87,
        name: "Science",
        slug: "science",
        language: "eng",
        games_count: 1563,
        image_background:
          "https://media.rawg.io/media/games/64d/64d9e33affb7a9a1df62229576d0bd6b.jpg",
      },
    ],
    esrb_rating: { id: 2, name: "Everyone 10+", slug: "everyone-10-plus" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
      },
      {
        id: 99018,
        image:
          "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
      },
      {
        id: 99019,
        image:
          "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
      },
      {
        id: 99020,
        image:
          "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
      },
      {
        id: 99021,
        image:
          "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
      },
      {
        id: 99022,
        image:
          "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
      },
      {
        id: 99023,
        image:
          "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg",
      },
    ],
  },
  {
    id: 4291,
    slug: "counter-strike-global-offensive",
    name: "Counter-Strike: Global Offensive",
    released: "2012-08-21",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    rating: 3.56,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1590, percent: 46.76 },
      { id: 3, title: "meh", count: 885, percent: 26.03 },
      { id: 5, title: "exceptional", count: 545, percent: 16.03 },
      { id: 1, title: "skip", count: 380, percent: 11.18 },
    ],
    ratings_count: 3365,
    reviews_text_count: 26,
    added: 15926,
    added_by_status: {
      yet: 255,
      owned: 12057,
      beaten: 970,
      toplay: 76,
      dropped: 1935,
      playing: 633,
    },
    metacritic: 81,
    playtime: 65,
    suggestions_count: 583,
    updated: "2023-10-24T19:20:26",
    user_game: null,
    reviews_count: 3400,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2012-08-21",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
          recommended:
            "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2012-08-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2012-08-21",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 4619,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 11489,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 49169,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 80,
        name: "Tactical",
        slug: "tactical",
        language: "eng",
        games_count: 4375,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 11669,
        name: "stats",
        slug: "stats",
        language: "eng",
        games_count: 4607,
        image_background:
          "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
      },
      {
        id: 40852,
        name: "Steam Workshop",
        slug: "steam-workshop",
        language: "eng",
        games_count: 1356,
        image_background:
          "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
      },
      {
        id: 157,
        name: "PvP",
        slug: "pvp",
        language: "eng",
        games_count: 7801,
        image_background:
          "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 809,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 70,
        name: "War",
        slug: "war",
        language: "eng",
        games_count: 8850,
        image_background:
          "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg",
      },
      {
        id: 40837,
        name: "In-App Purchases",
        slug: "in-app-purchases",
        language: "eng",
        games_count: 2244,
        image_background:
          "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
      },
      {
        id: 11,
        name: "Team-Based",
        slug: "team-based",
        language: "eng",
        games_count: 1380,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 77,
        name: "Realistic",
        slug: "realistic",
        language: "eng",
        games_count: 4410,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 131,
        name: "Fast-Paced",
        slug: "fast-paced",
        language: "eng",
        games_count: 10321,
        image_background:
          "https://media.rawg.io/media/games/560/560847de3a0fd510bbe6c305abca0f0f.jpg",
      },
      {
        id: 40856,
        name: "Valve Anti-Cheat enabled",
        slug: "valve-anti-cheat-enabled",
        language: "eng",
        games_count: 105,
        image_background:
          "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
      },
      {
        id: 81,
        name: "Military",
        slug: "military",
        language: "eng",
        games_count: 1519,
        image_background:
          "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
      },
      {
        id: 170,
        name: "Competitive",
        slug: "competitive",
        language: "eng",
        games_count: 1056,
        image_background:
          "https://media.rawg.io/media/screenshots/616/616437f375a1080756c917b1437404f3.jpg",
      },
      {
        id: 73,
        name: "e-sports",
        slug: "e-sports",
        language: "eng",
        games_count: 80,
        image_background:
          "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg",
      },
      {
        id: 245,
        name: "Trading",
        slug: "trading",
        language: "eng",
        games_count: 1028,
        image_background:
          "https://media.rawg.io/media/games/7ca/7ca90d463ea0c0252e7d01afe897ffa8.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 81644,
        image:
          "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg",
      },
      {
        id: 81645,
        image:
          "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg",
      },
      {
        id: 81646,
        image:
          "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg",
      },
      {
        id: 81647,
        image:
          "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg",
      },
      {
        id: 81648,
        image:
          "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg",
      },
      {
        id: 81649,
        image:
          "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg",
      },
    ],
  },
  {
    id: 5286,
    slug: "tomb-raider",
    name: "Tomb Raider (2013)",
    released: "2013-03-05",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    rating: 4.05,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 2306, percent: 60.48 },
      { id: 5, title: "exceptional", count: 970, percent: 25.44 },
      { id: 3, title: "meh", count: 418, percent: 10.96 },
      { id: 1, title: "skip", count: 119, percent: 3.12 },
    ],
    ratings_count: 3785,
    reviews_text_count: 13,
    added: 15911,
    added_by_status: {
      yet: 655,
      owned: 10297,
      beaten: 4078,
      toplay: 254,
      dropped: 523,
      playing: 104,
    },
    metacritic: 86,
    playtime: 10,
    suggestions_count: 642,
    updated: "2023-10-24T10:37:29",
    user_game: null,
    reviews_count: 3813,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2013-03-05",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2013-03-05",
        requirements_en: {
          minimum:
            "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB",
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2013-03-05",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
        },
        requirements_ru: {
          minimum: "i486-100, 8 Мб",
          recommended: "Pentium 166, 16 Мб",
        },
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2013-03-05",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2013-03-05",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2013-03-05",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
    ],
    stores: [
      {
        id: 33824,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
      {
        id: 13151,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 5640,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 218233,
        store: {
          id: 8,
          name: "Google Play",
          slug: "google-play",
          domain: "play.google.com",
          games_count: 17063,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
      },
      {
        id: 79036,
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
          domain: "apps.apple.com",
          games_count: 75343,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      },
      {
        id: 713685,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1731,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 20406,
        image_background:
          "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
      },
      {
        id: 189,
        name: "Female Protagonist",
        slug: "female-protagonist",
        language: "eng",
        games_count: 11093,
        image_background:
          "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 5868,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 69,
        name: "Action-Adventure",
        slug: "action-adventure",
        language: "eng",
        games_count: 14313,
        image_background:
          "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 3037,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 74,
        name: "Retro",
        slug: "retro",
        language: "eng",
        games_count: 40144,
        image_background:
          "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
      },
      {
        id: 110,
        name: "Cinematic",
        slug: "cinematic",
        language: "eng",
        games_count: 1602,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 269,
        name: "Quick-Time Events",
        slug: "quick-time-events",
        language: "eng",
        games_count: 471,
        image_background:
          "https://media.rawg.io/media/games/7a5/7a5f7a3e58593bfda983507c2ddbc891.jpg",
      },
      {
        id: 126,
        name: "Dinosaurs",
        slug: "dinosaurs",
        language: "eng",
        games_count: 1650,
        image_background:
          "https://media.rawg.io/media/screenshots/c01/c01c5d03b66381ebc97d30580627761e.jpg",
      },
      {
        id: 306,
        name: "Lara Croft",
        slug: "lara-croft",
        language: "eng",
        games_count: 14,
        image_background:
          "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 99160,
        image:
          "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg",
      },
      {
        id: 99161,
        image:
          "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg",
      },
      {
        id: 99162,
        image:
          "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg",
      },
      {
        id: 99163,
        image:
          "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg",
      },
      {
        id: 99164,
        image:
          "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg",
      },
      {
        id: 99165,
        image:
          "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg",
      },
    ],
  },
  {
    id: 13536,
    slug: "portal",
    name: "Portal",
    released: "2007-10-09",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    rating: 4.51,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 2807, percent: 61.04 },
      { id: 4, title: "recommended", count: 1527, percent: 33.2 },
      { id: 3, title: "meh", count: 173, percent: 3.76 },
      { id: 1, title: "skip", count: 92, percent: 2.0 },
    ],
    ratings_count: 4560,
    reviews_text_count: 26,
    added: 15554,
    added_by_status: {
      yet: 423,
      owned: 9612,
      beaten: 4825,
      toplay: 252,
      dropped: 368,
      playing: 74,
    },
    metacritic: 90,
    playtime: 4,
    suggestions_count: 285,
    updated: "2023-10-24T12:02:31",
    user_game: null,
    reviews_count: 4599,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 21,
          name: "Android",
          slug: "android",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52288,
          image_background:
            "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: { minimum: "4.4 and up" },
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: {
          minimum:
            "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection",
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: {
          minimum:
            "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>",
        },
        requirements_ru: {
          minimum:
            "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
          recommended:
            "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5342,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2007-10-09",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
    ],
    genres: [
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
      {
        id: 7,
        name: "Puzzle",
        slug: "puzzle",
        games_count: 97176,
        image_background:
          "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg",
      },
    ],
    stores: [
      {
        id: 14890,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 40973,
        store: {
          id: 8,
          name: "Google Play",
          slug: "google-play",
          domain: "play.google.com",
          games_count: 17063,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 10304,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 23109,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1731,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 189,
        name: "Female Protagonist",
        slug: "female-protagonist",
        language: "eng",
        games_count: 11093,
        image_background:
          "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 11295,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 40838,
        name: "Includes level editor",
        slug: "includes-level-editor",
        language: "eng",
        games_count: 1705,
        image_background:
          "https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg",
      },
      {
        id: 40833,
        name: "Captions available",
        slug: "captions-available",
        language: "eng",
        games_count: 1258,
        image_background:
          "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg",
      },
      {
        id: 111,
        name: "Short",
        slug: "short",
        language: "eng",
        games_count: 57526,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 114,
        name: "Physics",
        slug: "physics",
        language: "eng",
        games_count: 18172,
        image_background:
          "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
      },
      {
        id: 148,
        name: "Dark Humor",
        slug: "dark-humor",
        language: "eng",
        games_count: 2592,
        image_background:
          "https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg",
      },
      {
        id: 40834,
        name: "Commentary available",
        slug: "commentary-available",
        language: "eng",
        games_count: 258,
        image_background:
          "https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg",
      },
      {
        id: 40839,
        name: "Includes Source SDK",
        slug: "includes-source-sdk",
        language: "eng",
        games_count: 60,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 87,
        name: "Science",
        slug: "science",
        language: "eng",
        games_count: 1563,
        image_background:
          "https://media.rawg.io/media/games/64d/64d9e33affb7a9a1df62229576d0bd6b.jpg",
      },
    ],
    esrb_rating: { id: 3, name: "Teen", slug: "teen" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
      {
        id: 115793,
        image:
          "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg",
      },
      {
        id: 115794,
        image:
          "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg",
      },
      {
        id: 115795,
        image:
          "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg",
      },
      {
        id: 115796,
        image:
          "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg",
      },
      {
        id: 115797,
        image:
          "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg",
      },
      {
        id: 115798,
        image:
          "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg",
      },
    ],
  },
  {
    id: 12020,
    slug: "left-4-dead-2",
    name: "Left 4 Dead 2",
    released: "2009-11-17",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    rating: 4.09,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1697, percent: 53.33 },
      { id: 5, title: "exceptional", count: 1006, percent: 31.62 },
      { id: 3, title: "meh", count: 361, percent: 11.35 },
      { id: 1, title: "skip", count: 118, percent: 3.71 },
    ],
    ratings_count: 3163,
    reviews_text_count: 10,
    added: 15466,
    added_by_status: {
      yet: 371,
      owned: 11300,
      beaten: 2401,
      toplay: 113,
      dropped: 1138,
      playing: 143,
    },
    metacritic: 89,
    playtime: 9,
    suggestions_count: 584,
    updated: "2023-10-24T10:39:42",
    user_game: null,
    reviews_count: 3182,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2009-11-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2009-11-17",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2009-11-17",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
          recommended:
            "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2009-11-17",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 13208,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 34000,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 42503,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 5205,
        image_background:
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      },
      {
        id: 1,
        name: "Survival",
        slug: "survival",
        language: "eng",
        games_count: 7623,
        image_background:
          "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg",
      },
      {
        id: 75,
        name: "Local Co-Op",
        slug: "local-co-op",
        language: "eng",
        games_count: 5087,
        image_background:
          "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg",
      },
      {
        id: 80,
        name: "Tactical",
        slug: "tactical",
        language: "eng",
        games_count: 4375,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 11669,
        name: "stats",
        slug: "stats",
        language: "eng",
        games_count: 4607,
        image_background:
          "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
      },
      {
        id: 40852,
        name: "Steam Workshop",
        slug: "steam-workshop",
        language: "eng",
        games_count: 1356,
        image_background:
          "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
      },
      {
        id: 63,
        name: "Zombies",
        slug: "zombies",
        language: "eng",
        games_count: 9830,
        image_background:
          "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 809,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 43,
        name: "Post-apocalyptic",
        slug: "post-apocalyptic",
        language: "eng",
        games_count: 3526,
        image_background:
          "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
      },
      {
        id: 17,
        name: "Survival Horror",
        slug: "survival-horror",
        language: "eng",
        games_count: 7799,
        image_background:
          "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
      },
      {
        id: 40833,
        name: "Captions available",
        slug: "captions-available",
        language: "eng",
        games_count: 1258,
        image_background:
          "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg",
      },
      {
        id: 5,
        name: "Replay Value",
        slug: "replay-value",
        language: "eng",
        games_count: 1377,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 11,
        name: "Team-Based",
        slug: "team-based",
        language: "eng",
        games_count: 1380,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40856,
        name: "Valve Anti-Cheat enabled",
        slug: "valve-anti-cheat-enabled",
        language: "eng",
        games_count: 105,
        image_background:
          "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
      },
      {
        id: 40834,
        name: "Commentary available",
        slug: "commentary-available",
        language: "eng",
        games_count: 258,
        image_background:
          "https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg",
      },
      {
        id: 40839,
        name: "Includes Source SDK",
        slug: "includes-source-sdk",
        language: "eng",
        games_count: 60,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 99748,
        image:
          "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg",
      },
      {
        id: 99749,
        image:
          "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg",
      },
      {
        id: 99750,
        image:
          "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg",
      },
      {
        id: 99751,
        image:
          "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg",
      },
      {
        id: 99752,
        image:
          "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg",
      },
      {
        id: 99753,
        image:
          "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg",
      },
    ],
  },
  {
    id: 5679,
    slug: "the-elder-scrolls-v-skyrim",
    name: "The Elder Scrolls V: Skyrim",
    released: "2011-11-11",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    rating: 4.42,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 2603, percent: 57.45 },
      { id: 4, title: "recommended", count: 1431, percent: 31.58 },
      { id: 3, title: "meh", count: 400, percent: 8.83 },
      { id: 1, title: "skip", count: 97, percent: 2.14 },
    ],
    ratings_count: 4484,
    reviews_text_count: 32,
    added: 15199,
    added_by_status: {
      yet: 488,
      owned: 9061,
      beaten: 3617,
      toplay: 396,
      dropped: 1264,
      playing: 373,
    },
    metacritic: 94,
    playtime: 46,
    suggestions_count: 598,
    updated: "2023-10-24T19:20:54",
    user_game: null,
    reviews_count: 4531,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2011-11-11",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
          recommended:
            "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5342,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2011-11-11",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2011-11-11",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2011-11-11",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 53581,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
    ],
    stores: [
      {
        id: 6037,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 15144,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 32919,
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
          domain: "nintendo.com",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        },
      },
      {
        id: 49792,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 10304,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 64,
        name: "Fantasy",
        slug: "fantasy",
        language: "eng",
        games_count: 25421,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 6203,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 6041,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 40852,
        name: "Steam Workshop",
        slug: "steam-workshop",
        language: "eng",
        games_count: 1356,
        image_background:
          "https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg",
      },
      {
        id: 468,
        name: "role-playing",
        slug: "role-playing",
        language: "eng",
        games_count: 1531,
        image_background:
          "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 809,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 121,
        name: "Character Customization",
        slug: "character-customization",
        language: "eng",
        games_count: 3847,
        image_background:
          "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg",
      },
      {
        id: 40,
        name: "Dark Fantasy",
        slug: "dark-fantasy",
        language: "eng",
        games_count: 3503,
        image_background:
          "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
      },
      {
        id: 66,
        name: "Medieval",
        slug: "medieval",
        language: "eng",
        games_count: 5677,
        image_background:
          "https://media.rawg.io/media/screenshots/2a2/2a2a162a08f2bba053334ecfda25228d.jpg",
      },
      {
        id: 82,
        name: "Magic",
        slug: "magic",
        language: "eng",
        games_count: 8457,
        image_background:
          "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
      },
      {
        id: 205,
        name: "Lore-Rich",
        slug: "lore-rich",
        language: "eng",
        games_count: 962,
        image_background:
          "https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg",
      },
      {
        id: 215,
        name: "Dragons",
        slug: "dragons",
        language: "eng",
        games_count: 2467,
        image_background:
          "https://media.rawg.io/media/games/260/26023c855f1769a93411d6a7ea084632.jpeg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
      {
        id: 118307,
        image:
          "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg",
      },
      {
        id: 118308,
        image:
          "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg",
      },
      {
        id: 118309,
        image:
          "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg",
      },
      {
        id: 118310,
        image:
          "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg",
      },
      {
        id: 118311,
        image:
          "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg",
      },
      {
        id: 118312,
        image:
          "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg",
      },
    ],
  },
  {
    id: 28,
    slug: "red-dead-redemption-2",
    name: "Red Dead Redemption 2",
    released: "2018-10-26",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    rating: 4.59,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 3548, percent: 73.28 },
      { id: 4, title: "recommended", count: 889, percent: 18.36 },
      { id: 3, title: "meh", count: 266, percent: 5.49 },
      { id: 1, title: "skip", count: 139, percent: 2.87 },
    ],
    ratings_count: 4741,
    reviews_text_count: 73,
    added: 14678,
    added_by_status: {
      yet: 888,
      owned: 7671,
      beaten: 2999,
      toplay: 1583,
      dropped: 642,
      playing: 895,
    },
    metacritic: 96,
    playtime: 20,
    suggestions_count: 603,
    updated: "2023-10-24T21:35:15",
    user_game: null,
    reviews_count: 4842,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2018-10-26",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2018-10-26",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2018-10-26",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
    ],
    stores: [
      {
        id: 257732,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 374316,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
      {
        id: 384218,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 48782,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 10304,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 5205,
        image_background:
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 20406,
        image_background:
          "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 6203,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 34,
        name: "Violent",
        slug: "violent",
        language: "eng",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 3037,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 157,
        name: "PvP",
        slug: "pvp",
        language: "eng",
        games_count: 7801,
        image_background:
          "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
      },
      {
        id: 40837,
        name: "In-App Purchases",
        slug: "in-app-purchases",
        language: "eng",
        games_count: 2244,
        image_background:
          "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
      },
      {
        id: 192,
        name: "Mature",
        slug: "mature",
        language: "eng",
        games_count: 2446,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 89,
        name: "Historical",
        slug: "historical",
        language: "eng",
        games_count: 2725,
        image_background:
          "https://media.rawg.io/media/games/be9/be9cf02720c9326e11d0fda14518554f.jpg",
      },
      {
        id: 110,
        name: "Cinematic",
        slug: "cinematic",
        language: "eng",
        games_count: 1602,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 77,
        name: "Realistic",
        slug: "realistic",
        language: "eng",
        games_count: 4410,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 2620,
        image_background:
          "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
      },
      {
        id: 45878,
        name: "Online PvP",
        slug: "online-pvp",
        language: "eng",
        games_count: 3560,
        image_background:
          "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
      },
      {
        id: 478,
        name: "3rd-Person Perspective",
        slug: "3rd-person-perspective",
        language: "eng",
        games_count: 85,
        image_background:
          "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
      },
      {
        id: 270,
        name: "Blood",
        slug: "blood",
        language: "eng",
        games_count: 1970,
        image_background:
          "https://media.rawg.io/media/screenshots/6f3/6f3855fc42784a7da7bdc4cf325b0d30.jpg",
      },
      {
        id: 78,
        name: "America",
        slug: "america",
        language: "eng",
        games_count: 522,
        image_background:
          "https://media.rawg.io/media/games/9c5/9c5bc0b6e67102bc96dcf1ba41509e42.jpg",
      },
      {
        id: 578,
        name: "Masterpiece",
        slug: "masterpiece",
        language: "eng",
        games_count: 287,
        image_background:
          "https://media.rawg.io/media/screenshots/d3c/d3c1a4036f6d1dc8e5208fb046a9ac5a.jpg",
      },
      {
        id: 577,
        name: "Beautiful",
        slug: "beautiful",
        language: "eng",
        games_count: 1810,
        image_background:
          "https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg",
      },
      {
        id: 181,
        name: "Hunting",
        slug: "hunting",
        language: "eng",
        games_count: 861,
        image_background:
          "https://media.rawg.io/media/games/b39/b396dac1f3e0f538841aa0355dd066d3.jpg",
      },
      {
        id: 152,
        name: "Western",
        slug: "western",
        language: "eng",
        games_count: 1228,
        image_background:
          "https://media.rawg.io/media/games/a41/a4126f8dc70a3e664b18b983722ed082.jpg",
      },
      {
        id: 5452,
        name: "3rd-person",
        slug: "3rd-person",
        language: "eng",
        games_count: 97,
        image_background:
          "https://media.rawg.io/media/screenshots/e30/e30b6a334c20ae534c15d3f0d71cad36.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
      },
      {
        id: 778173,
        image:
          "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg",
      },
      {
        id: 778174,
        image:
          "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg",
      },
      {
        id: 778175,
        image:
          "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg",
      },
      {
        id: 778176,
        image:
          "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg",
      },
      {
        id: 778177,
        image:
          "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg",
      },
      {
        id: 778178,
        image:
          "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg",
      },
    ],
  },
  {
    id: 4062,
    slug: "bioshock-infinite",
    name: "BioShock Infinite",
    released: "2013-03-26",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    rating: 4.38,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 2180, percent: 55.18 },
      { id: 4, title: "recommended", count: 1314, percent: 33.26 },
      { id: 3, title: "meh", count: 348, percent: 8.81 },
      { id: 1, title: "skip", count: 109, percent: 2.76 },
    ],
    ratings_count: 3913,
    reviews_text_count: 22,
    added: 14677,
    added_by_status: {
      yet: 803,
      owned: 8714,
      beaten: 4194,
      toplay: 387,
      dropped: 483,
      playing: 96,
    },
    metacritic: 94,
    playtime: 12,
    suggestions_count: 595,
    updated: "2023-10-24T10:37:27",
    user_game: null,
    reviews_count: 3951,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5342,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
          recommended:
            "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD",
        },
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2013-03-26",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 828870,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
      {
        id: 71727,
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
          domain: "apps.apple.com",
          games_count: 75343,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      },
      {
        id: 440409,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 461035,
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
          domain: "nintendo.com",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        },
      },
      {
        id: 4382,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 13084,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 33810,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 64,
        name: "Fantasy",
        slug: "fantasy",
        language: "eng",
        games_count: 25421,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 5205,
        image_background:
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      },
      {
        id: 115,
        name: "Controller",
        slug: "controller",
        language: "eng",
        games_count: 10054,
        image_background:
          "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
      },
      {
        id: 119,
        name: "Dystopian",
        slug: "dystopian",
        language: "eng",
        games_count: 1890,
        image_background:
          "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
      },
      {
        id: 154,
        name: "Steampunk",
        slug: "steampunk",
        language: "eng",
        games_count: 1140,
        image_background:
          "https://media.rawg.io/media/games/c5b/c5b3b6aa220050f7f504f4477cb51d3b.jpg",
      },
      {
        id: 305,
        name: "Linear",
        slug: "linear",
        language: "eng",
        games_count: 4545,
        image_background:
          "https://media.rawg.io/media/games/569/569ea25d2b56bd05c7fa309ddabe81ff.jpg",
      },
      {
        id: 208,
        name: "Alternate History",
        slug: "alternate-history",
        language: "eng",
        games_count: 1547,
        image_background:
          "https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg",
      },
      {
        id: 317,
        name: "Time Travel",
        slug: "time-travel",
        language: "eng",
        games_count: 1714,
        image_background:
          "https://media.rawg.io/media/screenshots/d5c/d5c4c4af04545fe14604b2807d83a927.jpg",
      },
      {
        id: 287,
        name: "Political",
        slug: "political",
        language: "eng",
        games_count: 529,
        image_background:
          "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
      {
        id: 98549,
        image:
          "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg",
      },
      {
        id: 98550,
        image:
          "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg",
      },
      {
        id: 98551,
        image:
          "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg",
      },
      {
        id: 98552,
        image:
          "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg",
      },
      {
        id: 98553,
        image:
          "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg",
      },
      {
        id: 98554,
        image:
          "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg",
      },
    ],
  },
  {
    id: 802,
    slug: "borderlands-2",
    name: "Borderlands 2",
    released: "2012-09-18",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    rating: 4.01,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1498, percent: 47.8 },
      { id: 5, title: "exceptional", count: 972, percent: 31.01 },
      { id: 3, title: "meh", count: 533, percent: 17.01 },
      { id: 1, title: "skip", count: 131, percent: 4.18 },
    ],
    ratings_count: 3114,
    reviews_text_count: 12,
    added: 14484,
    added_by_status: {
      yet: 600,
      owned: 9996,
      beaten: 2218,
      toplay: 219,
      dropped: 1238,
      playing: 213,
    },
    metacritic: 89,
    playtime: 10,
    suggestions_count: 677,
    updated: "2023-10-26T13:23:11",
    user_game: null,
    reviews_count: 3134,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
          recommended:
            "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение",
        },
      },
      {
        platform: {
          id: 21,
          name: "Android",
          slug: "android",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52288,
          image_background:
            "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 19,
          name: "PS Vita",
          slug: "ps-vita",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 1445,
          image_background:
            "https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2012-09-18",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
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
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 53581,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
    ],
    stores: [
      {
        id: 4000,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 213037,
        store: {
          id: 8,
          name: "Google Play",
          slug: "google-play",
          domain: "play.google.com",
          games_count: 17063,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
      },
      {
        id: 11088,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 34042,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
      {
        id: 71617,
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
          domain: "apps.apple.com",
          games_count: 75343,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      },
      {
        id: 817,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 23109,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 11295,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 6041,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 167,
        name: "Futuristic",
        slug: "futuristic",
        language: "eng",
        games_count: 4643,
        image_background:
          "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
      },
      {
        id: 120,
        name: "Memes",
        slug: "memes",
        language: "eng",
        games_count: 1619,
        image_background:
          "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg",
      },
      {
        id: 148,
        name: "Dark Humor",
        slug: "dark-humor",
        language: "eng",
        games_count: 2592,
        image_background:
          "https://media.rawg.io/media/games/d1c/d1cd8a226cb224357c1f59605577cbf2.jpg",
      },
      {
        id: 166,
        name: "Stylized",
        slug: "stylized",
        language: "eng",
        games_count: 4911,
        image_background:
          "https://media.rawg.io/media/screenshots/8ff/8ffe8f19d2e764867c8ed625ddf4e368.jpg",
      },
      {
        id: 98,
        name: "Loot",
        slug: "loot",
        language: "eng",
        games_count: 2033,
        image_background:
          "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
      },
      {
        id: 7041,
        image:
          "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg",
      },
      {
        id: 7062,
        image:
          "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg",
      },
      {
        id: 7070,
        image:
          "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg",
      },
      {
        id: 7072,
        image:
          "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg",
      },
      {
        id: 7081,
        image:
          "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg",
      },
      {
        id: 7088,
        image:
          "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg",
      },
    ],
  },
  {
    id: 3439,
    slug: "life-is-strange-episode-1-2",
    name: "Life is Strange",
    released: "2015-01-29",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    rating: 4.11,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 1565, percent: 43.9 },
      { id: 4, title: "recommended", count: 1295, percent: 36.33 },
      { id: 3, title: "meh", count: 475, percent: 13.32 },
      { id: 1, title: "skip", count: 230, percent: 6.45 },
    ],
    ratings_count: 3520,
    reviews_text_count: 28,
    added: 14479,
    added_by_status: {
      yet: 761,
      owned: 9326,
      beaten: 3286,
      toplay: 341,
      dropped: 621,
      playing: 144,
    },
    metacritic: 83,
    playtime: 6,
    suggestions_count: 532,
    updated: "2023-10-23T07:17:47",
    user_game: null,
    reviews_count: 3565,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 3,
          name: "iOS",
          slug: "ios",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 77121,
          image_background:
            "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: {
          minimum:
            "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen",
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 21,
          name: "Android",
          slug: "android",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52288,
          image_background:
            "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: { minimum: "6.0 and up" },
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2015-01-29",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 4, name: "iOS", slug: "ios" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
    ],
    genres: [
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
    ],
    stores: [
      {
        id: 451321,
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
          domain: "gog.com",
          games_count: 5574,
          image_background:
            "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        },
      },
      {
        id: 3702,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 35603,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 35602,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 217695,
        store: {
          id: 8,
          name: "Google Play",
          slug: "google-play",
          domain: "play.google.com",
          games_count: 17063,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
      },
      {
        id: 245823,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
      {
        id: 44714,
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
          domain: "apps.apple.com",
          games_count: 75343,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 189,
        name: "Female Protagonist",
        slug: "female-protagonist",
        language: "eng",
        games_count: 11093,
        image_background:
          "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 14555,
        image_background:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 141,
        name: "Point & Click",
        slug: "point-click",
        language: "eng",
        games_count: 12055,
        image_background:
          "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg",
      },
      {
        id: 111,
        name: "Short",
        slug: "short",
        language: "eng",
        games_count: 57526,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 117,
        name: "Mystery",
        slug: "mystery",
        language: "eng",
        games_count: 12310,
        image_background:
          "https://media.rawg.io/media/games/813/813f9dab418a3d549f8b9ad8ef2f3d9c.jpg",
      },
      {
        id: 145,
        name: "Choices Matter",
        slug: "choices-matter",
        language: "eng",
        games_count: 4082,
        image_background:
          "https://media.rawg.io/media/games/6e0/6e0c19bb111bd4fa20cf0eb72a049519.jpg",
      },
      {
        id: 120,
        name: "Memes",
        slug: "memes",
        language: "eng",
        games_count: 1619,
        image_background:
          "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg",
      },
      {
        id: 91,
        name: "Walking Simulator",
        slug: "walking-simulator",
        language: "eng",
        games_count: 6491,
        image_background:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 218,
        name: "Multiple Endings",
        slug: "multiple-endings",
        language: "eng",
        games_count: 7546,
        image_background:
          "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
      },
      {
        id: 406,
        name: "Story",
        slug: "story",
        language: "eng",
        games_count: 11295,
        image_background:
          "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
      },
      {
        id: 232,
        name: "Episodic",
        slug: "episodic",
        language: "eng",
        games_count: 442,
        image_background:
          "https://media.rawg.io/media/games/24d/24df5a8d70c80c15dade8304dd4370a5.jpg",
      },
      {
        id: 295,
        name: "Soundtrack",
        slug: "soundtrack",
        language: "eng",
        games_count: 2858,
        image_background:
          "https://media.rawg.io/media/games/958/9582b5acfecaefac5875fa13e5901081.jpg",
      },
      {
        id: 317,
        name: "Time Travel",
        slug: "time-travel",
        language: "eng",
        games_count: 1714,
        image_background:
          "https://media.rawg.io/media/screenshots/d5c/d5c4c4af04545fe14604b2807d83a927.jpg",
      },
      {
        id: 302,
        name: "Time Manipulation",
        slug: "time-manipulation",
        language: "eng",
        games_count: 433,
        image_background:
          "https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg",
      },
      {
        id: 992,
        name: "student",
        slug: "student",
        language: "eng",
        games_count: 1517,
        image_background:
          "https://media.rawg.io/media/screenshots/14e/14e8044e7e97fc9d23fcf53c2b78b9a1.jpg",
      },
      {
        id: 2682,
        name: "strange",
        slug: "strange",
        language: "eng",
        games_count: 360,
        image_background:
          "https://media.rawg.io/media/screenshots/1d4/1d42ee97681050baedab12c082bb8b54.jpg",
      },
      {
        id: 3197,
        name: "photography",
        slug: "photography",
        language: "eng",
        games_count: 203,
        image_background:
          "https://media.rawg.io/media/screenshots/c22/c22e3dfc119300f50b7fd0748eb9b41c.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 1826487,
        image:
          "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg",
      },
      {
        id: 1826488,
        image:
          "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg",
      },
      {
        id: 1826489,
        image:
          "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg",
      },
      {
        id: 1826490,
        image:
          "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg",
      },
      {
        id: 1826491,
        image:
          "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg",
      },
      {
        id: 1826492,
        image:
          "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg",
      },
    ],
  },
  {
    id: 13537,
    slug: "half-life-2",
    name: "Half-Life 2",
    released: "2004-11-16",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    rating: 4.49,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 2398, percent: 63.88 },
      { id: 4, title: "recommended", count: 1025, percent: 27.3 },
      { id: 3, title: "meh", count: 217, percent: 5.78 },
      { id: 1, title: "skip", count: 114, percent: 3.04 },
    ],
    ratings_count: 3730,
    reviews_text_count: 17,
    added: 13841,
    added_by_status: {
      yet: 636,
      owned: 8696,
      beaten: 3588,
      toplay: 300,
      dropped: 530,
      playing: 91,
    },
    metacritic: 96,
    playtime: 7,
    suggestions_count: 551,
    updated: "2023-10-24T12:02:50",
    user_game: null,
    reviews_count: 3754,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2004-11-16",
        requirements_en: {
          minimum:
            "Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space",
        },
        requirements_ru: {
          minimum:
            "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
          recommended:
            "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет",
        },
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2004-11-16",
        requirements_en: {
          minimum:
            "Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher",
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2004-11-16",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2004-11-16",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 80,
          name: "Xbox",
          slug: "xbox-old",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 730,
          image_background:
            "https://media.rawg.io/media/games/9d4/9d45e22df640fcb6f4b754aa3491ae09.jpg",
        },
        released_at: "2004-11-16",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 21,
          name: "Android",
          slug: "android",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52288,
          image_background:
            "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
        },
        released_at: "2004-11-16",
        requirements_en: { minimum: "4.4 and up" },
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 14891,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 41441,
        store: {
          id: 8,
          name: "Google Play",
          slug: "google-play",
          domain: "play.google.com",
          games_count: 17063,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 10304,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 42503,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1731,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 63,
        name: "Zombies",
        slug: "zombies",
        language: "eng",
        games_count: 9830,
        image_background:
          "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 809,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
      {
        id: 40833,
        name: "Captions available",
        slug: "captions-available",
        language: "eng",
        games_count: 1258,
        image_background:
          "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg",
      },
      {
        id: 114,
        name: "Physics",
        slug: "physics",
        language: "eng",
        games_count: 18172,
        image_background:
          "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
      },
      {
        id: 172,
        name: "Aliens",
        slug: "aliens",
        language: "eng",
        games_count: 6398,
        image_background:
          "https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg",
      },
      {
        id: 119,
        name: "Dystopian",
        slug: "dystopian",
        language: "eng",
        games_count: 1890,
        image_background:
          "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
      },
      {
        id: 40839,
        name: "Includes Source SDK",
        slug: "includes-source-sdk",
        language: "eng",
        games_count: 60,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
      },
      {
        id: 319,
        name: "Silent Protagonist",
        slug: "silent-protagonist",
        language: "eng",
        games_count: 82,
        image_background:
          "https://media.rawg.io/media/screenshots/cf9/cf970e84fffa9e95f750e01ad225c3a6.jpg",
      },
      {
        id: 62349,
        name: "vr mod",
        slug: "vr-mod",
        language: "eng",
        games_count: 17,
        image_background:
          "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
      },
      {
        id: 115804,
        image:
          "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg",
      },
      {
        id: 115805,
        image:
          "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg",
      },
      {
        id: 115806,
        image:
          "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg",
      },
      {
        id: 115807,
        image:
          "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg",
      },
      {
        id: 115808,
        image:
          "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg",
      },
      {
        id: 115809,
        image:
          "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg",
      },
    ],
  },
  {
    id: 4286,
    slug: "bioshock",
    name: "BioShock",
    released: "2007-08-21",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    rating: 4.36,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 1698, percent: 52.95 },
      { id: 4, title: "recommended", count: 1170, percent: 36.48 },
      { id: 3, title: "meh", count: 237, percent: 7.39 },
      { id: 1, title: "skip", count: 102, percent: 3.18 },
    ],
    ratings_count: 3166,
    reviews_text_count: 25,
    added: 13310,
    added_by_status: {
      yet: 607,
      owned: 8503,
      beaten: 3074,
      toplay: 318,
      dropped: 698,
      playing: 110,
    },
    metacritic: 96,
    playtime: 3,
    suggestions_count: 643,
    updated: "2023-10-25T10:14:14",
    user_game: null,
    reviews_count: 3207,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2007-08-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2007-08-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2007-08-21",
        requirements_en: {
          minimum:
            '<h2 class="bb_tag"><strong>Minimum: </strong></h2><ul class="bb_ul"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>',
          recommended:
            '<h2 class="bb_tag"><strong>Recommended: </strong></h2><ul class="bb_ul"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
          recommended:
            "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение",
        },
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2007-08-21",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 4614,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 79531,
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
          domain: "apps.apple.com",
          games_count: 75343,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      },
      {
        id: 440407,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 20580,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 33844,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 10304,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 42503,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1731,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 6041,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 14555,
        image_background:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 119,
        name: "Dystopian",
        slug: "dystopian",
        language: "eng",
        games_count: 1890,
        image_background:
          "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
      },
      {
        id: 154,
        name: "Steampunk",
        slug: "steampunk",
        language: "eng",
        games_count: 1140,
        image_background:
          "https://media.rawg.io/media/games/c5b/c5b3b6aa220050f7f504f4477cb51d3b.jpg",
      },
      {
        id: 208,
        name: "Alternate History",
        slug: "alternate-history",
        language: "eng",
        games_count: 1547,
        image_background:
          "https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg",
      },
      {
        id: 287,
        name: "Political",
        slug: "political",
        language: "eng",
        games_count: 529,
        image_background:
          "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
      {
        id: 250,
        name: "Underwater",
        slug: "underwater",
        language: "eng",
        games_count: 2006,
        image_background:
          "https://media.rawg.io/media/games/d70/d70084559f41e7a7d4b1cc441c163763.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
      },
      {
        id: 170993,
        image:
          "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg",
      },
      {
        id: 170994,
        image:
          "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg",
      },
      {
        id: 170995,
        image:
          "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg",
      },
      {
        id: 170996,
        image:
          "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg",
      },
      {
        id: 170997,
        image:
          "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg",
      },
      {
        id: 170998,
        image:
          "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg",
      },
    ],
  },
  {
    id: 32,
    slug: "destiny-2",
    name: "Destiny 2",
    released: "2017-09-06",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    rating: 3.54,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1153, percent: 44.86 },
      { id: 3, title: "meh", count: 827, percent: 32.18 },
      { id: 5, title: "exceptional", count: 354, percent: 13.77 },
      { id: 1, title: "skip", count: 236, percent: 9.18 },
    ],
    ratings_count: 2544,
    reviews_text_count: 19,
    added: 12928,
    added_by_status: {
      yet: 415,
      owned: 9724,
      beaten: 763,
      toplay: 161,
      dropped: 1466,
      playing: 399,
    },
    metacritic: 82,
    playtime: 5,
    suggestions_count: 1205,
    updated: "2023-10-26T10:50:30",
    user_game: null,
    reviews_count: 2570,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2017-09-06",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2017-09-06",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2017-09-06",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 171,
          name: "Web",
          slug: "web",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 260090,
          image_background:
            "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg",
        },
        released_at: "2017-09-06",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 186,
          name: "Xbox Series S/X",
          slug: "xbox-series-x",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 820,
          image_background:
            "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg",
        },
        released_at: "2017-09-06",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 187,
          name: "PlayStation 5",
          slug: "playstation5",
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 954,
          image_background:
            "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        },
        released_at: "2017-09-06",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 14, name: "Web", slug: "web" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
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
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
      {
        id: 59,
        name: "Massively Multiplayer",
        slug: "massively-multiplayer",
        games_count: 3375,
        image_background:
          "https://media.rawg.io/media/games/d07/d0790809a13027251b6d0f4dc7538c58.jpg",
      },
    ],
    stores: [
      {
        id: 837910,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
      {
        id: 32,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 808,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 326831,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 20406,
        image_background:
          "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
      },
      {
        id: 79,
        name: "Free to Play",
        slug: "free-to-play",
        language: "eng",
        games_count: 5734,
        image_background:
          "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg",
      },
      {
        id: 397,
        name: "Online multiplayer",
        slug: "online-multiplayer",
        language: "eng",
        games_count: 3804,
        image_background:
          "https://media.rawg.io/media/games/509/509c81a5da92a8d0645d9e160d155017.jpg",
      },
      {
        id: 69,
        name: "Action-Adventure",
        slug: "action-adventure",
        language: "eng",
        games_count: 14313,
        image_background:
          "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
      },
      {
        id: 25,
        name: "Space",
        slug: "space",
        language: "eng",
        games_count: 42077,
        image_background:
          "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg",
      },
      {
        id: 157,
        name: "PvP",
        slug: "pvp",
        language: "eng",
        games_count: 7801,
        image_background:
          "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg",
      },
      {
        id: 167,
        name: "Futuristic",
        slug: "futuristic",
        language: "eng",
        games_count: 4643,
        image_background:
          "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
      },
      {
        id: 172,
        name: "Aliens",
        slug: "aliens",
        language: "eng",
        games_count: 6398,
        image_background:
          "https://media.rawg.io/media/games/963/963815b2a1a88475a31f311b591e70fb.jpg",
      },
      {
        id: 1465,
        name: "combat",
        slug: "combat",
        language: "eng",
        games_count: 10179,
        image_background:
          "https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg",
      },
      {
        id: 406,
        name: "Story",
        slug: "story",
        language: "eng",
        games_count: 11295,
        image_background:
          "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
      },
      {
        id: 478,
        name: "3rd-Person Perspective",
        slug: "3rd-person-perspective",
        language: "eng",
        games_count: 85,
        image_background:
          "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
      },
      {
        id: 413,
        name: "online",
        slug: "online",
        language: "eng",
        games_count: 6539,
        image_background:
          "https://media.rawg.io/media/games/af2/af2b640fa820e8a8135948a4cd399539.jpg",
      },
      {
        id: 158,
        name: "MMORPG",
        slug: "mmorpg",
        language: "eng",
        games_count: 1314,
        image_background:
          "https://media.rawg.io/media/games/596/596a48ef3b62b63b4cc59633e28be903.jpg",
      },
      {
        id: 98,
        name: "Loot",
        slug: "loot",
        language: "eng",
        games_count: 2033,
        image_background:
          "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
      },
      {
        id: 171,
        name: "PvE",
        slug: "pve",
        language: "eng",
        games_count: 3608,
        image_background:
          "https://media.rawg.io/media/games/7a6/7a6f90e85a2e264c3b440bb4787cf378.jpg",
      },
      {
        id: 2030,
        name: "city",
        slug: "city",
        language: "eng",
        games_count: 9189,
        image_background:
          "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg",
      },
      {
        id: 205,
        name: "Lore-Rich",
        slug: "lore-rich",
        language: "eng",
        games_count: 962,
        image_background:
          "https://media.rawg.io/media/games/98c/98c87b286cd2a2ba942167df384a9bd3.jpg",
      },
      {
        id: 5816,
        name: "console",
        slug: "console",
        language: "eng",
        games_count: 1389,
        image_background:
          "https://media.rawg.io/media/games/45d/45da4dc311d84b79230317d7b24a3dec.jpg",
      },
      {
        id: 744,
        name: "friends",
        slug: "friends",
        language: "eng",
        games_count: 15106,
        image_background:
          "https://media.rawg.io/media/screenshots/d86/d860ad3ffad8a9a580067185fc77d093.jpg",
      },
      {
        id: 578,
        name: "Masterpiece",
        slug: "masterpiece",
        language: "eng",
        games_count: 287,
        image_background:
          "https://media.rawg.io/media/screenshots/d3c/d3c1a4036f6d1dc8e5208fb046a9ac5a.jpg",
      },
      {
        id: 3109,
        name: "weapons",
        slug: "weapons",
        language: "eng",
        games_count: 2198,
        image_background:
          "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg",
      },
      {
        id: 1484,
        name: "skill",
        slug: "skill",
        language: "eng",
        games_count: 3510,
        image_background:
          "https://media.rawg.io/media/games/18a/18a3d9d3ddebe3f7af215af8d53613d0.jpg",
      },
      {
        id: 3046,
        name: "destroy",
        slug: "destroy",
        language: "eng",
        games_count: 4601,
        image_background:
          "https://media.rawg.io/media/screenshots/df3/df32ec248aea1ecff6bd679ec5eb22dd.jpg",
      },
      {
        id: 1743,
        name: "collect",
        slug: "collect",
        language: "eng",
        games_count: 8060,
        image_background:
          "https://media.rawg.io/media/screenshots/bcf/bcf7adc4db65b3e9c68113b11aa2b128_mkTjKME.jpg",
      },
      {
        id: 2184,
        name: "hunt",
        slug: "hunt",
        language: "eng",
        games_count: 2332,
        image_background:
          "https://media.rawg.io/media/games/c36/c366f32194f488b2d04c0ec086c2cc3d.jpg",
      },
      {
        id: 754,
        name: "gun",
        slug: "gun",
        language: "eng",
        games_count: 3208,
        image_background:
          "https://media.rawg.io/media/screenshots/ad9/ad94ac60de3ce1cd995df7e897a3c74a.jpg",
      },
      {
        id: 1527,
        name: "rain",
        slug: "rain",
        language: "eng",
        games_count: 858,
        image_background:
          "https://media.rawg.io/media/screenshots/c7b/c7b6140815bc7772cdb3fd40e89fa2ab.jpg",
      },
      {
        id: 18426,
        name: "enemy",
        slug: "enemy",
        language: "eng",
        games_count: 2541,
        image_background:
          "https://media.rawg.io/media/screenshots/a8c/a8c89ab537b4be241da77662441ad2b4.jpg",
      },
      {
        id: 691,
        name: "quick",
        slug: "quick",
        language: "eng",
        games_count: 929,
        image_background:
          "https://media.rawg.io/media/screenshots/297/2979df39126f664573ceb7278ab8c957_v8iodDE.jpg",
      },
      {
        id: 2863,
        name: "darkness",
        slug: "darkness",
        language: "eng",
        games_count: 457,
        image_background:
          "https://media.rawg.io/media/games/6e3/6e3e39b0ab4a54879856894f969a9c93.jpg",
      },
      {
        id: 6580,
        name: "defender",
        slug: "defender",
        language: "eng",
        games_count: 182,
        image_background:
          "https://media.rawg.io/media/screenshots/a03/a03028737c2abdc12aafdc3c4e38fa75.jpg",
      },
    ],
    esrb_rating: { id: 3, name: "Teen", slug: "teen" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
      },
      {
        id: 2629150,
        image:
          "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg",
      },
      {
        id: 2629151,
        image:
          "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg",
      },
      {
        id: 2629152,
        image:
          "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg",
      },
      {
        id: 2629153,
        image:
          "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg",
      },
      {
        id: 2629154,
        image:
          "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg",
      },
      {
        id: 2629155,
        image:
          "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg",
      },
    ],
  },
  {
    id: 1030,
    slug: "limbo",
    name: "Limbo",
    released: "2010-07-21",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    rating: 4.15,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1681, percent: 52.35 },
      { id: 5, title: "exceptional", count: 1107, percent: 34.48 },
      { id: 3, title: "meh", count: 321, percent: 10.0 },
      { id: 1, title: "skip", count: 102, percent: 3.18 },
    ],
    ratings_count: 3173,
    reviews_text_count: 25,
    added: 12916,
    added_by_status: {
      yet: 545,
      owned: 8196,
      beaten: 3101,
      toplay: 296,
      dropped: 686,
      playing: 92,
    },
    metacritic: 88,
    playtime: 3,
    suggestions_count: 187,
    updated: "2023-10-24T10:34:10",
    user_game: null,
    reviews_count: 3211,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: {
          minimum:
            '<ul class="bb_ul"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 19,
          name: "PS Vita",
          slug: "ps-vita",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 1444,
          image_background:
            "https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 21,
          name: "Android",
          slug: "android",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52288,
          image_background:
            "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: { minimum: "4.4 and up" },
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5342,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 3,
          name: "iOS",
          slug: "ios",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 77121,
          image_background:
            "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: {
          minimum:
            "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen",
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: {
          minimum:
            '<ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>',
        },
        requirements_ru: {
          minimum:
            "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
          recommended:
            "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере",
        },
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 102239,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: {
          minimum:
            'Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 2786,
          image_background:
            "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 3162,
          image_background:
            "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2010-07-21",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 4, name: "iOS", slug: "ios" } },
      { platform: { id: 8, name: "Android", slug: "android" } },
      { platform: { id: 5, name: "Apple Macintosh", slug: "mac" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
    ],
    genres: [
      {
        id: 3,
        name: "Adventure",
        slug: "adventure",
        games_count: 134744,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
      },
      {
        id: 51,
        name: "Indie",
        slug: "indie",
        games_count: 56480,
        image_background:
          "https://media.rawg.io/media/games/5be/5bec14622f6faf804a592176577c1347.jpg",
      },
      {
        id: 7,
        name: "Puzzle",
        slug: "puzzle",
        games_count: 97176,
        image_background:
          "https://media.rawg.io/media/games/c2e/c2e6ad5c838d551aeff376f1f3d9d65e.jpg",
      },
      {
        id: 83,
        name: "Platformer",
        slug: "platformer",
        games_count: 100680,
        image_background:
          "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
      },
    ],
    stores: [
      {
        id: 1054,
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore",
          domain: "apps.apple.com",
          games_count: 75343,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      },
      {
        id: 3679,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 7493,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 10311,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 26852,
        store: {
          id: 5,
          name: "GOG",
          slug: "gog",
          domain: "gog.com",
          games_count: 5574,
          image_background:
            "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        },
      },
      {
        id: 33137,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
      {
        id: 49142,
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
          domain: "nintendo.com",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        },
      },
      {
        id: 40035,
        store: {
          id: 8,
          name: "Google Play",
          slug: "google-play",
          domain: "play.google.com",
          games_count: 17063,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
      },
      {
        id: 335541,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 45,
        name: "2D",
        slug: "2d",
        language: "eng",
        games_count: 189875,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 42503,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 49,
        name: "Difficult",
        slug: "difficult",
        language: "eng",
        games_count: 12655,
        image_background:
          "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
      },
      {
        id: 115,
        name: "Controller",
        slug: "controller",
        language: "eng",
        games_count: 10054,
        image_background:
          "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
      },
      {
        id: 41,
        name: "Dark",
        slug: "dark",
        language: "eng",
        games_count: 14555,
        image_background:
          "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
      },
      {
        id: 336,
        name: "controller support",
        slug: "controller-support",
        language: "eng",
        games_count: 293,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 111,
        name: "Short",
        slug: "short",
        language: "eng",
        games_count: 57526,
        image_background:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 113,
        name: "Side Scroller",
        slug: "side-scroller",
        language: "eng",
        games_count: 9719,
        image_background:
          "https://media.rawg.io/media/games/598/59851e152a6898c8bf79069b5bf2f4db.jpg",
      },
      {
        id: 114,
        name: "Physics",
        slug: "physics",
        language: "eng",
        games_count: 18172,
        image_background:
          "https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg",
      },
      {
        id: 110,
        name: "Cinematic",
        slug: "cinematic",
        language: "eng",
        games_count: 1602,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 46,
        name: "Surreal",
        slug: "surreal",
        language: "eng",
        games_count: 4745,
        image_background:
          "https://media.rawg.io/media/games/0b5/0b5410b1e4b3fb72696dcefbf4f1cf40.jpg",
      },
      {
        id: 83,
        name: "Puzzle-Platformer",
        slug: "puzzle-platformer",
        language: "eng",
        games_count: 9498,
        image_background:
          "https://media.rawg.io/media/screenshots/ddb/ddbcf3f1330e146094b0ce211e33090a.jpg",
      },
      {
        id: 112,
        name: "Minimalist",
        slug: "minimalist",
        language: "eng",
        games_count: 14104,
        image_background:
          "https://media.rawg.io/media/screenshots/5a3/5a335ee04477c97d393e8ba03f8e6d91.jpg",
      },
    ],
    esrb_rating: { id: 3, name: "Teen", slug: "teen" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
      },
      {
        id: 30985,
        image:
          "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg",
      },
      {
        id: 30986,
        image:
          "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg",
      },
      {
        id: 30987,
        image:
          "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg",
      },
      {
        id: 30988,
        image:
          "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg",
      },
      {
        id: 30989,
        image:
          "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg",
      },
      {
        id: 30991,
        image:
          "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg",
      },
    ],
  },
  {
    id: 58175,
    slug: "god-of-war-2",
    name: "God of War (2018)",
    released: "2018-04-20",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    rating: 4.57,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 3329, percent: 71.45 },
      { id: 4, title: "recommended", count: 960, percent: 20.61 },
      { id: 3, title: "meh", count: 224, percent: 4.81 },
      { id: 1, title: "skip", count: 146, percent: 3.13 },
    ],
    ratings_count: 4563,
    reviews_text_count: 69,
    added: 12886,
    added_by_status: {
      yet: 663,
      owned: 6562,
      beaten: 3812,
      toplay: 1113,
      dropped: 322,
      playing: 414,
    },
    metacritic: 94,
    playtime: 12,
    suggestions_count: 587,
    updated: "2023-10-24T12:01:52",
    user_game: null,
    reviews_count: 4659,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2018-04-20",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2018-04-20",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
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
    ],
    stores: [
      {
        id: 46917,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 677451,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 677452,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 64,
        name: "Fantasy",
        slug: "fantasy",
        language: "eng",
        games_count: 25421,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 5205,
        image_background:
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 20406,
        image_background:
          "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
      },
      {
        id: 34,
        name: "Violent",
        slug: "violent",
        language: "eng",
        games_count: 6083,
        image_background:
          "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 6041,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 69,
        name: "Action-Adventure",
        slug: "action-adventure",
        language: "eng",
        games_count: 14313,
        image_background:
          "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg",
      },
      {
        id: 68,
        name: "Hack and Slash",
        slug: "hack-and-slash",
        language: "eng",
        games_count: 3650,
        image_background:
          "https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg",
      },
      {
        id: 37796,
        name: "exclusive",
        slug: "exclusive",
        language: "eng",
        games_count: 4503,
        image_background:
          "https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg",
      },
      {
        id: 125,
        name: "Crafting",
        slug: "crafting",
        language: "eng",
        games_count: 3621,
        image_background:
          "https://media.rawg.io/media/games/7e7/7e79e3296a7f64e7535c9e5bb5aa4b53.jpg",
      },
      {
        id: 1465,
        name: "combat",
        slug: "combat",
        language: "eng",
        games_count: 10179,
        image_background:
          "https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg",
      },
      {
        id: 571,
        name: "3D",
        slug: "3d",
        language: "eng",
        games_count: 79087,
        image_background:
          "https://media.rawg.io/media/games/2a5/2a5072e5b28e1653a10e4f931f1991af.jpg",
      },
      {
        id: 37797,
        name: "true exclusive",
        slug: "true-exclusive",
        language: "eng",
        games_count: 3989,
        image_background:
          "https://media.rawg.io/media/games/e98/e989eb7026737bbb7bd386c1d16a5735.jpg",
      },
      {
        id: 478,
        name: "3rd-Person Perspective",
        slug: "3rd-person-perspective",
        language: "eng",
        games_count: 85,
        image_background:
          "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg",
      },
      {
        id: 270,
        name: "Blood",
        slug: "blood",
        language: "eng",
        games_count: 1970,
        image_background:
          "https://media.rawg.io/media/screenshots/6f3/6f3855fc42784a7da7bdc4cf325b0d30.jpg",
      },
      {
        id: 171,
        name: "PvE",
        slug: "pve",
        language: "eng",
        games_count: 3608,
        image_background:
          "https://media.rawg.io/media/games/7a6/7a6f90e85a2e264c3b440bb4787cf378.jpg",
      },
      {
        id: 572,
        name: "Emotional",
        slug: "emotional",
        language: "eng",
        games_count: 2100,
        image_background:
          "https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg",
      },
      {
        id: 580,
        name: "Souls-like",
        slug: "souls-like",
        language: "eng",
        games_count: 1136,
        image_background:
          "https://media.rawg.io/media/games/16a/16a81cc458b0acb6ed2bcfd2a10f1527.jpg",
      },
      {
        id: 108,
        name: "Mythology",
        slug: "mythology",
        language: "eng",
        games_count: 1761,
        image_background:
          "https://media.rawg.io/media/games/760/760b379c7d3ab6eb68375fba0f81aa96.jpg",
      },
      {
        id: 43374,
        name: "Remote Play on TV",
        slug: "remote-play-on-tv",
        language: "eng",
        games_count: 346,
        image_background:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
      },
      {
        id: 766263,
        image:
          "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg",
      },
      {
        id: 766264,
        image:
          "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg",
      },
      {
        id: 766265,
        image:
          "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg",
      },
      {
        id: 766266,
        image:
          "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg",
      },
      {
        id: 766267,
        image:
          "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg",
      },
      {
        id: 766268,
        image:
          "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg",
      },
    ],
  },
  {
    id: 3070,
    slug: "fallout-4",
    name: "Fallout 4",
    released: "2015-11-09",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    rating: 3.8,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1550, percent: 48.45 },
      { id: 3, title: "meh", count: 830, percent: 25.95 },
      { id: 5, title: "exceptional", count: 664, percent: 20.76 },
      { id: 1, title: "skip", count: 155, percent: 4.85 },
    ],
    ratings_count: 3171,
    reviews_text_count: 19,
    added: 12828,
    added_by_status: {
      yet: 612,
      owned: 8070,
      beaten: 2157,
      toplay: 400,
      dropped: 1289,
      playing: 300,
    },
    metacritic: 84,
    playtime: 40,
    suggestions_count: 449,
    updated: "2023-10-24T19:19:37",
    user_game: null,
    reviews_count: 3199,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2015-11-09",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2015-11-09",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2015-11-09",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg",
        games_count: 53581,
        image_background:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      },
    ],
    stores: [
      {
        id: 3252,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 9047,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
      {
        id: 13248,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 15192,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 18266,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 19151,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 6622,
        image_background:
          "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 10018,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 6,
        name: "Exploration",
        slug: "exploration",
        language: "eng",
        games_count: 20406,
        image_background:
          "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 6203,
        image_background:
          "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
      },
      {
        id: 1,
        name: "Survival",
        slug: "survival",
        language: "eng",
        games_count: 7623,
        image_background:
          "https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg",
      },
      {
        id: 97,
        name: "Action RPG",
        slug: "action-rpg",
        language: "eng",
        games_count: 6041,
        image_background:
          "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 3037,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 43,
        name: "Post-apocalyptic",
        slug: "post-apocalyptic",
        language: "eng",
        games_count: 3526,
        image_background:
          "https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 27994,
        image:
          "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg",
      },
      {
        id: 27996,
        image:
          "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg",
      },
      {
        id: 28000,
        image:
          "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg",
      },
      {
        id: 28002,
        image:
          "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg",
      },
      {
        id: 28004,
        image:
          "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg",
      },
      {
        id: 28006,
        image:
          "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg",
      },
    ],
  },
  {
    id: 2454,
    slug: "doom",
    name: "DOOM (2016)",
    released: "2016-05-13",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    rating: 4.38,
    rating_top: 5,
    ratings: [
      { id: 5, title: "exceptional", count: 1795, percent: 52.2 },
      { id: 4, title: "recommended", count: 1308, percent: 38.03 },
      { id: 3, title: "meh", count: 256, percent: 7.44 },
      { id: 1, title: "skip", count: 80, percent: 2.33 },
    ],
    ratings_count: 3400,
    reviews_text_count: 29,
    added: 12757,
    added_by_status: {
      yet: 554,
      owned: 7972,
      beaten: 2743,
      toplay: 482,
      dropped: 712,
      playing: 294,
    },
    metacritic: 85,
    playtime: 10,
    suggestions_count: 657,
    updated: "2023-10-22T17:49:00",
    user_game: null,
    reviews_count: 3439,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2016-05-13",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2016-05-13",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>',
        },
        requirements_ru: {
          minimum: "i386-33, 4 Мб",
          recommended: "i486-40, 8 Мб",
        },
      },
      {
        platform: {
          id: 7,
          name: "Nintendo Switch",
          slug: "nintendo-switch",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5342,
          image_background:
            "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        },
        released_at: "2016-05-13",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6730,
          image_background:
            "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        },
        released_at: "2016-05-13",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 2, name: "PlayStation", slug: "playstation" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 7, name: "Nintendo", slug: "nintendo" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 355582,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 2571,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 38659,
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
          domain: "nintendo.com",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        },
      },
      {
        id: 8223,
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store",
          domain: "microsoft.com",
          games_count: 4771,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 30515,
        image_background:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 32,
        name: "Sci-fi",
        slug: "sci-fi",
        language: "eng",
        games_count: 17682,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 10304,
        image_background:
          "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
      },
      {
        id: 16,
        name: "Horror",
        slug: "horror",
        language: "eng",
        games_count: 42503,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 5205,
        image_background:
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
      },
      {
        id: 49,
        name: "Difficult",
        slug: "difficult",
        language: "eng",
        games_count: 12655,
        image_background:
          "https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg",
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1731,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 63,
        name: "Zombies",
        slug: "zombies",
        language: "eng",
        games_count: 9830,
        image_background:
          "https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg",
      },
      {
        id: 120,
        name: "Memes",
        slug: "memes",
        language: "eng",
        games_count: 1619,
        image_background:
          "https://media.rawg.io/media/games/11b/11b81edff7f45024e36b88e880d86585.jpg",
      },
      {
        id: 131,
        name: "Fast-Paced",
        slug: "fast-paced",
        language: "eng",
        games_count: 10321,
        image_background:
          "https://media.rawg.io/media/games/560/560847de3a0fd510bbe6c305abca0f0f.jpg",
      },
      {
        id: 271,
        name: "Remake",
        slug: "remake",
        language: "eng",
        games_count: 1675,
        image_background:
          "https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg",
      },
      {
        id: 270,
        name: "Blood",
        slug: "blood",
        language: "eng",
        games_count: 1970,
        image_background:
          "https://media.rawg.io/media/screenshots/6f3/6f3855fc42784a7da7bdc4cf325b0d30.jpg",
      },
      {
        id: 187,
        name: "Demons",
        slug: "demons",
        language: "eng",
        games_count: 2129,
        image_background:
          "https://media.rawg.io/media/screenshots/601/601a7eb90b02a424090f9a67dbc316d3.jpg",
      },
    ],
    esrb_rating: { id: 4, name: "Mature", slug: "mature" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
      },
      {
        id: 22393,
        image:
          "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg",
      },
      {
        id: 22394,
        image:
          "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg",
      },
      {
        id: 22398,
        image:
          "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg",
      },
      {
        id: 22400,
        image:
          "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg",
      },
      {
        id: 22402,
        image:
          "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg",
      },
      {
        id: 22404,
        image:
          "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg",
      },
    ],
  },
  {
    id: 3939,
    slug: "payday-2",
    name: "PAYDAY 2",
    released: "2013-08-13",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    rating: 3.51,
    rating_top: 4,
    ratings: [
      { id: 4, title: "recommended", count: 1084, percent: 51.64 },
      { id: 3, title: "meh", count: 579, percent: 27.58 },
      { id: 1, title: "skip", count: 220, percent: 10.48 },
      { id: 5, title: "exceptional", count: 216, percent: 10.29 },
    ],
    ratings_count: 2082,
    reviews_text_count: 14,
    added: 12550,
    added_by_status: {
      yet: 495,
      owned: 9735,
      beaten: 762,
      toplay: 97,
      dropped: 1341,
      playing: 120,
    },
    metacritic: 79,
    playtime: 9,
    suggestions_count: 410,
    updated: "2023-10-24T19:20:52",
    user_game: null,
    reviews_count: 2099,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    platforms: [
      {
        platform: {
          id: 6,
          name: "Linux",
          slug: "linux",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75643,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        released_at: "2013-08-13",
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 518039,
          image_background:
            "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        },
        released_at: "2013-08-13",
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows 7<br>\t</li><li><strong>Processor:</strong>2 GHz Intel Dual Core Processor<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (512MB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>31 GB HD space <br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows 10<br>\t</li><li><strong>Processor:</strong>2.3 GHz Intel Quad Core Processor<br>\t</li><li><strong>Memory:</strong>8 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (1GB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>45 GB HD space<br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one",
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5558,
          image_background:
            "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        },
        released_at: "2013-08-13",
        requirements_en: null,
        requirements_ru: null,
      },
    ],
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } },
      { platform: { id: 3, name: "Xbox", slug: "xbox" } },
      { platform: { id: 6, name: "Linux", slug: "linux" } },
    ],
    genres: [
      {
        id: 4,
        name: "Action",
        slug: "action",
        games_count: 175015,
        image_background:
          "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
      },
      {
        id: 2,
        name: "Shooter",
        slug: "shooter",
        games_count: 59390,
        image_background:
          "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
      },
    ],
    stores: [
      {
        id: 961005,
        store: {
          id: 11,
          name: "Epic Games",
          slug: "epic-games",
          domain: "epicgames.com",
          games_count: 1283,
          image_background:
            "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        },
      },
      {
        id: 4258,
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store",
          domain: "store.playstation.com",
          games_count: 7847,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
      },
      {
        id: 10780,
        store: {
          id: 1,
          name: "Steam",
          slug: "steam",
          domain: "store.steampowered.com",
          games_count: 80889,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
      },
      {
        id: 27939,
        store: {
          id: 6,
          name: "Nintendo Store",
          slug: "nintendo",
          domain: "nintendo.com",
          games_count: 8894,
          image_background:
            "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
        },
      },
      {
        id: 34027,
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360",
          domain: "marketplace.xbox.com",
          games_count: 1912,
          image_background:
            "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        },
      },
    ],
    clip: null,
    tags: [
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 210420,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 32458,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 35827,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 15284,
        image_background:
          "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7569,
        image_background:
          "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 3249,
        image_background:
          "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 10313,
        image_background:
          "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 4328,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
      },
      {
        id: 8,
        name: "First-Person",
        slug: "first-person",
        language: "eng",
        games_count: 29416,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 30,
        name: "FPS",
        slug: "fps",
        language: "eng",
        games_count: 12400,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 9,
        name: "Online Co-Op",
        slug: "online-co-op",
        language: "eng",
        games_count: 4743,
        image_background:
          "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 23109,
        image_background:
          "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
      },
      {
        id: 15,
        name: "Stealth",
        slug: "stealth",
        language: "eng",
        games_count: 5868,
        image_background:
          "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      },
      {
        id: 80,
        name: "Tactical",
        slug: "tactical",
        language: "eng",
        games_count: 4375,
        image_background:
          "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
      },
      {
        id: 40837,
        name: "In-App Purchases",
        slug: "in-app-purchases",
        language: "eng",
        games_count: 2244,
        image_background:
          "https://media.rawg.io/media/games/651/651ae84f2d5e36206aad90976a453329.jpg",
      },
      {
        id: 11,
        name: "Team-Based",
        slug: "team-based",
        language: "eng",
        games_count: 1380,
        image_background:
          "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 2620,
        image_background:
          "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg",
      },
      {
        id: 171,
        name: "PvE",
        slug: "pve",
        language: "eng",
        games_count: 3608,
        image_background:
          "https://media.rawg.io/media/games/7a6/7a6f90e85a2e264c3b440bb4787cf378.jpg",
      },
      {
        id: 216,
        name: "Heist",
        slug: "heist",
        language: "eng",
        games_count: 472,
        image_background:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 274,
        name: "Gun Customization",
        slug: "gun-customization",
        language: "eng",
        games_count: 455,
        image_background:
          "https://media.rawg.io/media/screenshots/46a/46a28691e8b9514831f520392e18de82.jpg",
      },
    ],
    esrb_rating: { id: 5, name: "Adults Only", slug: "adults-only" },
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
      },
      {
        id: 74194,
        image:
          "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg",
      },
      {
        id: 74195,
        image:
          "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg",
      },
      {
        id: 74196,
        image:
          "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg",
      },
      {
        id: 74197,
        image:
          "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg",
      },
      {
        id: 74198,
        image:
          "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg",
      },
      {
        id: 74199,
        image:
          "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg",
      },
    ],
  },
];

const GamesContainer = () => {
  const [orderBy, setOrderBy] = useState<string>("relevance");
  const [platform, setPlatform] = useState<string>("all");
  const [view, setView] = useState<"list" | "grid">("grid");

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  setInterval(() => {
    setIsDataLoaded(true);
  }, 2000);

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
              {PARENT_PLATFROMS.map((p) => (
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
          {/* {GAMES.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })} */}

          {GAMES.map((game) => {
            if (isDataLoaded) return <GameCard key={game.id} game={game} />;
            else return <GameCardSkeleton key={game.id} />;
          })}
        </Grid>
      )}

      {view === "list" && (
        <Stack direction="column" gap={5} marginTop={3} alignItems="center">
          {GAMES.map((game) => {
            return <GameCard key={game.id} game={game} view={view} />;
          })}
        </Stack>
      )}
    </Box>
  );
};
export default GamesContainer;
