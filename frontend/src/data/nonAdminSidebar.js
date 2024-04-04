import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";


const menuForNonAdmin = [
    {
      title: "Dashboard",
      icon: <FaTh />,
      path: "/secondDashboard",
    },
    {
      title: "Request Items",
      icon: <BiImageAdd />,
      path: "/request-item",
    },
    {
      title: "Accounts",
      icon: <FaRegChartBar />,
      childrens: [
        {
          title: "Profile",
          path: "/nonadmin-profile",
        },
        {
          title: "Edit Profile",
          path: "/edit-nonadmin-profile",
        }
      ],
    },
    {
      title: "Contact-Us",
      icon: <FaCommentAlt />,
      path: "/contact-nonadmins",
    },
];


export default menuForNonAdmin;