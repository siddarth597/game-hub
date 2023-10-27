import { Card, CardContent, Skeleton, Stack } from "@mui/material";

const GameCardSkeleton = (props: any) => {
  return (
    <Card
      sx={{
        width: props.view === "list" ? "40vw" : 300,
        minWidth: 300,
        height: "min-content",
        cursor: "pointer",
        borderRadius: "20px",
      }}
      onClick={() => {
        console.log(props.game.id);
      }}
    >
      <Skeleton variant="rectangular" height={180} />
      <CardContent>
        <Stack gap={2}>
          <Skeleton variant="rectangular" height={20} />
          <Skeleton variant="rectangular" height={20} />
          <Skeleton variant="rectangular" height={20} />
        </Stack>
      </CardContent>
    </Card>
  );
};
export default GameCardSkeleton;
