import { Container, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import GamesContainer from "./components/GamesContainer";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <NavBar />

        <Stack direction="row" gap={5}>
          <Sidebar />
          <GamesContainer />
        </Stack>
      </Container>
    </>
  );
}

export default App;
