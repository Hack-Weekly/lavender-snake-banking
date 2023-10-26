import Analytics from "../components/Analytics";
import Dashboard from "../components/Dashboard";
import Payments from "../components/Payments";
import Deposits from "../components/Deposits";
import Account from "../components/Account.jsx";
import Settings from "../components/Settings";

export const navOptions = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: Dashboard,
  },
  {
    name: "Analytics",
    path: "/analytics",
    element: Analytics,
  },
  {
    name: "Payments",
    path: "/payments",
    element: Payments,
  },
  {
    name: "Deposits",
    path: "/deposits",
    element: Deposits,
  },
  {
    name: "Account",
    path: "/account",
    element: Account,
  },
  {
    name: "Settings",
    path: "/settings",
    element: Settings,
  },
];
