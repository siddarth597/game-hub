import {
  Badge,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Platforms from "./Platforms";
// import IGame from "../interfaces/Game.interface";

// type Props = {
//   game: IGame;
// };

const GameCard = (props: Record<string, any>) => {
  const badgeColor: "warning" | "error" | "success" = props?.game?.metacritic
    ? props?.game?.metacritic > 80
      ? "success"
      : props?.game?.metacritic > 50
      ? "warning"
      : "error"
    : "error";

  return (
    <Card
      sx={{
        width: props.view === "list" ? "40vw" : 300,
        minWidth: 300,
        height: "min-content",
        cursor: "pointer",
      }}
      onClick={() => {
        console.log(props.game.id);
      }}
    >
      <CardMedia
        sx={{ height: props.view === "list" ? "25vw" : 180, minHeight: 180 }}
        image={props.game.background_image}
        title={props.game.name}
      />
      <CardContent>
        <Platforms
          platforms={props?.game?.parent_platforms.map(
            (p: Record<string, any>) => {
              return p?.platform?.slug;
            }
          )}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={600}
          marginTop={1}
        >
          {props.game.name}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Badge
            badgeContent={props.game.metacritic}
            color={badgeColor}
            sx={{ marginLeft: 1 }}
          />
          <Button
            disabled
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
          >
            {props.game.ratings_count}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default GameCard;
