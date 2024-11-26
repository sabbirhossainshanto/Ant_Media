import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
import Home1 from "../pages/Home/Home1";

const MainRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [
          {
            index: true,
            element: <Home1 />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
