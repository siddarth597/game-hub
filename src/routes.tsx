import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GameDetail from "./components/GameDetail";
import GamesContainer from "./components/GamesContainer";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GamesContainer />,
      },
      {
        path: "/:slug",
        element: <GameDetail />,
      },
    ],
  },
]);

export default router;
