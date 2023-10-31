import Analytics from "../components/Analytics";
import Dashboard from "../components/Dashboard";
import Payments from "../components/Payments";
import Deposits from "../components/Deposits";
import Account from "../components/Account.jsx";
import Settings from "../components/Settings";
import {
  BookKeyIcon,
  CircleDollarSignIcon,
  KanbanSquareIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export const navOptions = [
  {
    name: "Dashboard",
    path: "/",
    element: Dashboard,
    icon: LayoutDashboardIcon,
  },
  {
    name: "Analytics",
    path: "/analytics",
    element: Analytics,
    icon: KanbanSquareIcon,
  },
  {
    name: "Payments",
    path: "/payments",
    element: Payments,
    icon: CircleDollarSignIcon,
  },
  {
    name: "Deposits",
    path: "/deposits",
    element: Deposits,
    icon: BookKeyIcon,
  },
  {
    name: "Account",
    path: "/account",
    element: Account,
    icon: UserIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    element: Settings,
    icon: SettingsIcon,
  },
];
