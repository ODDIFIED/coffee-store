import ImageEleven from "./images/ImageEleven.svg";
import ImageTwelve from "./images/ImageTwelve.svg";
import ImageThirteen from "./images/ImageThirteen.svg";
import ImageFourteen from "./images/ImageFourteen.svg";
import ImageNine from "./images/ImageNine.svg";
import ImageFifteen from "./images/ImageFifteen.svg";
import { IoIosCall } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { GrLocationPin } from "react-icons/gr";

export const ServiceDetails = [
  {
    id: 1,
    coffee_name: "High Quality",
    coffee_des:
      "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second.",
    Img: ImageEleven,
  },
  {
    id: 2,
    coffee_name: "Selected coffee beans",
    coffee_des:
      "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second.",
    Img: ImageFourteen,
  },
  {
    id: 3,
    coffee_name: "Own Roasting",
    coffee_des:
      "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second.",
    Img: ImageThirteen,
  },
  {
    id: 4,
    coffee_name: "Freshly Brewed",
    coffee_des:
      "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second.",
    Img: ImageTwelve,
  },
  {
    id: 5,
    coffee_name: "Coffee Variety",
    coffee_des:
      "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second.",
    Img: ImageFifteen,
  },
  {
    id: 6,
    coffee_name: "Excellent Grinding",
    coffee_des:
      "Never trust anyone who doesn't drink coffee,Our culture runs on coffee and gasoline, the first often tasting like the second.",
    Img: ImageNine,
  },
];

export const ContactDetails = [
  {
    id: 1,
    icon: <IoIosCall />,
    heading: "Contact Us",
    content: "+12345676545",
    contentOne: "+12345676545",
  },
  {
    id: 2,
    icon: <BiTimeFive />,
    heading: "Opening Hours",
    content: "Mon-Fir: 8am-5pm",
    contentOne: "Sat-Sun: 10am-4pm",
  },
  {
    id: 3,
    icon: <AiFillMail />,
    heading: "Email",
    content: "coffeestore@gmail.com",
    contentOne: "teeplace@gmail.com",
  },
  {
    id: 4,
    icon: <GrLocationPin />,
    heading: "Address",
    content: "Copper road,New york",
    contentOne: " ikorodu ,Lagos ",

  },
];
