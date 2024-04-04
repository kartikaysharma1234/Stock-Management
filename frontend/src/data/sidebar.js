import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
// import {RiAdminLine} from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
      // {
      //   title: "Admin",
      //   path: "/edit-profile",
      // },
    ],
  },
  {
    title: "Contact-Us",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];



// eslint-disable-next-line
export default menu;
