import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../Components/DashboardComponent/DashboardHome/DashboardHome";
import DashboardRakingChart from "../Components/DashboardComponent/DashboardRakingChart/DashboardRakingChart";
import DashboardRanking from "../Components/DashboardComponent/DashboardRanking/DashboardRanking";
import DashboardReferral from "../Components/DashboardComponent/DashboardReferral/DashboardReferral";
import DashboardLayout from "../Components/Layout/MainLayout/DashboardLayout/DashboardLayout";
import MainLayout from "../Components/Layout/MainLayout/MainLayout";
import Login from "../Components/Login/Login";
import LoginWithEmail from "../Components/Login/LoginWithEmail";
import SingUp from "../Components/SingUp/SingUp";

// all Routing 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginemail",
    element: <LoginWithEmail />,
  },
  {
    path: "/singup",
    element: <SingUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/raking",
        element: <DashboardRanking />,
      },
      {
        path: "/dashboard/chart",
        element: <DashboardRakingChart />,
      },
      {
        path: "/dashboard/referral",
        element: <DashboardReferral />,
      },
    ],
  },
]);
