import { Stack, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={3}
          paddingY={3}
        >
          <Typography
            variant="h4"
            component="div"
            fontWeight={900}
            sx={{ flexGrow: 1 }}
            letterSpacing={2}
          >
            RAWG
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Search games..."
            variant="outlined"
            fullWidth
            size="small"
          />
        </Stack>
      </AppBar>
    </Box>
  );
}
