import { Stack, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useGameQueryStore from "../state/GameQueryStore";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { setSearch, reset } = useGameQueryStore();
  const search = useGameQueryStore((s) => s.gameQuery.search);

  // using state to debounce the search value for a reduced API calls
  const [searchQuery, setSearchQuery] = useState<string | null | undefined>(
    search
  );

  const debouncedSearch = useDebounce(searchQuery, 500);

  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearch) {
      setSearch(debouncedSearch);
      navigate(`/`);
    } else setSearch(null);
  }, [debouncedSearch]);

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
            sx={{ flexGrow: 1, cursor: "pointer" }}
            letterSpacing={2}
            onClick={() => reset()}
          >
            RAWG
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Search games..."
            variant="outlined"
            fullWidth
            size="small"
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Stack>
      </AppBar>
    </Box>
  );
}
