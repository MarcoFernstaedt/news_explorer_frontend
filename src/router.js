import { createBrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import HomePage from "./components/HomePage/HomePage";
import SavedNews from "./components/SavedNews/SavedNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/saved-news",
        element: <SavedNews />,
      },
    ],
  },
]);

export default router;
