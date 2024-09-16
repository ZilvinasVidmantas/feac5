import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import UserListPage from "../pages/UserListPage/UserListPage";
import UserListClassComponentPage from "../pages/UserListClassComponentPage/UserListClassComponentPage";
import { HeaderLayout } from "../layouts/HeaderLayout/HeaderLayout";
import { RegistrationPage } from "../pages/auth/RegistrationPage/RegistrationPage";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.home, element: <HeaderLayout />, children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.userList,
        element: <UserListPage />,
      },
      {
        path: routes.userListClassComponent,
        element: <UserListClassComponentPage />,
      },
      {
        path: routes.auth.register,
        element: <RegistrationPage />,
      },
    ]
  },
]);
