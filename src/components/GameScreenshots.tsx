import { Skeleton, Stack } from "@mui/material";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading } = useGameScreenshots(slug);

  if (isLoading) {
    return (
      <Stack direction="row" flexWrap="wrap" gap={1} marginY={3} minWidth={400}>
        {[...Array(6)].map((i) => (
          <Skeleton key={i} variant="rectangular" height={150} width={180} />
        ))}
      </Stack>
    );
  }

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1}
      flexGrow={2}
      minWidth={{ xs: 200, md: 400 }}
      alignContent={"flex-start"}
      justifyContent={"space-around"}
      marginY={3}
    >
      {data?.results?.map((i) => (
        <img key={i.id} height={150} width={180} src={i.image} />
      ))}
    </Stack>
  );
};
export default GameScreenshots;
