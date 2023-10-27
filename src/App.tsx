import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <NavBar />

        <Stack direction="row" gap={5}>
          <Sidebar />
          <Box sx={{ flexGrow: 5 }}>
            <Outlet />
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
