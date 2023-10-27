import AddIcon from "@mui/icons-material/Add";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import IGame from "../interfaces/Game.interface";
import Platforms from "./Platforms";

type Props = {
  game: IGame;
  view?: "list" | "grid";
};

const GameCard = ({ game, view = "grid" }: Props) => {
  const navigate = useNavigate();

  const badgeColor: "warning" | "error" | "success" = game?.metacritic
    ? game?.metacritic > 80
      ? "success"
      : game?.metacritic > 50
      ? "warning"
      : "error"
    : "error";

  return (
    <Card
      sx={{
        width: view === "list" ? "40vw" : 300,
        minWidth: 300,
        height: "min-content",
        cursor: "pointer",
        borderRadius: "20px",
        transition: "all .2s",
        ":hover": { transform: "scale(1.05)" },
      }}
      onClick={() => {
        navigate(`/${game.slug}`);
      }}
    >
      <CardMedia
        sx={{ height: view === "list" ? "25vw" : 180, minHeight: 180 }}
        image={game.background_image}
        title={game.name}
      />
      <CardContent>
        <Platforms
          platforms={game?.parent_platforms?.map((p) => {
            return p?.platform?.slug;
          })}
        />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={600}
          marginTop={1}
        >
          {game.name}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Badge
            badgeContent={game.metacritic}
            color={badgeColor}
            sx={{ marginLeft: 1 }}
          />
          <Button
            disabled
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
          >
            {game.ratings_count}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
export default GameCard;
