import { Box, Skeleton, Stack, Typography } from "@mui/material";
import useGenres from "../hooks/useGenres";
import IGenre from "../interfaces/Genre.interface";

const Sidebar = () => {
  const { isError, isLoading, data } = useGenres();

  console.log(data);
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

      {isError ? (
        <Typography color="red">Error occured while fetching genres</Typography>
      ) : (
        <Stack gap={2} marginTop={2}>
          {isLoading === false
            ? data?.results.map((genre) => {
                return <SidebarItem key={genre.id} genre={genre} />;
              })
            : [...Array(20)].map((_num: number, i: number) => {
                return <SidebarItemSkeleton key={i + 1} />;
              })}
        </Stack>
      )}
    </Box>
  );
};
export default Sidebar;

const SidebarItem = ({ genre }: { genre: IGenre }) => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      justifyContent="flex-start"
      onClick={() => {
        console.log(`selected genre id -> ${genre.id}`);
      }}
      sx={{ cursor: "pointer" }}
    >
      <img
        src={genre.image_background}
        alt={genre.name}
        height="30px"
        width="30px"
        style={{ borderRadius: "5px" }}
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
