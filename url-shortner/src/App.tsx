import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app.layout";
import LandingPage from "./pages/Landing.page";
import DashboardPage from "./pages/dashboard.page";
import AuthPage from "./pages/auth.page";
import LinkPage from "./pages/link.page";
import RedirectLink from "./pages/redirect-link.page";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/link/:id",
        element: <LinkPage />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
