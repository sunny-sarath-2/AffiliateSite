// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// // core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// // core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.jsx";
import Event1 from "views/Shooju/Event1";
import Event2 from "views/Shooju/Event2";
import Blogs from "views/Shooju/Blogs";
import Home from "./views/Home/Home";
import Gallery from "./views/Shooju/Gallery";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Home,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Event1,
    layout: "/admin"
  },
  {
    path: "/Webinars",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Event2,
    layout: "/admin"
  },
  {
    path: "/blogs",
    name: "Blogs",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Blogs,
    layout: "/admin"
  },
  {
    path: "/gallery",
    name: "Gallery",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Gallery,
    layout: "/admin"
  }
];

export default dashboardRoutes;
