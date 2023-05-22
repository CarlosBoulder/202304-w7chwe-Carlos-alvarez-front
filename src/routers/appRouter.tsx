import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import App from "../components/App/App";
import UsersPage from "../pages/UsersPage/Userspage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <p>Page not found, please try it later</p>,
      },
    ],
  },
  {
    path: "/users",
    element: <App />,
    children: [
      {
        index: true,
        element: <UsersPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
