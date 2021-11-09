import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import SignInPage from "../../pages/SignInPage";
import BusinessRegistrationPage from "../../pages/BusinessRegistrationPage";
import SimpleRegistrationPage from "../../pages/SimpleRegistrationPage";
import MyTunersPage from "../../pages/MyTunersPage";
import AllTunerssPage from "../../pages/AllTunerssPage";
import { BiHome } from "react-icons/bi";
import { GiMechanicGarage } from "react-icons/gi";
import { MdAppRegistration } from "react-icons/md";
import { GoSignIn } from "react-icons/go";
import { FcAbout } from "react-icons/fc";

export const tabs = [
  {
    name: "Home",
    href: "/home",
    page: HomePage,
    displayForLoggedin: true,
    icon: <BiHome style={{ color: "coral", fontSize: "1.5em" }} />,
  },
  {
    name: "About Us",
    href: "/about",
    page: AboutPage,
    displayForLoggedin: true,
    icon: <FcAbout style={{ color: "blue", fontSize: "1.5em" }} />,
  },
  {
    name: "Simple Registration",
    href: "/simple-registration",
    page: SimpleRegistrationPage,
    displayForLoggedin: false,
    icon: <MdAppRegistration style={{ color: "purple", fontSize: "1.5em" }} />,
  },
  {
    name: "Business Registration",
    href: "/business-registration",
    page: BusinessRegistrationPage,
    displayForLoggedin: false,
    icon: <MdAppRegistration style={{ color: "yellow", fontSize: "1.5em" }} />,
  },
  {
    name: "Add Tuner",
    href: "/my-tuners",
    page: MyTunersPage,
    displayForLoggedin: true,
    bizUser: true,
    hideForLoggedout: true,
    icon: (
      <GiMechanicGarage style={{ color: "slateblue", fontSize: "1.5em" }} />
    ),
  },
  {
    name: "All Tuners",
    href: "/all-tuners",
    page: AllTunerssPage,
    displayForLoggedin: true,
    bizUser: false,
    hideForLoggedout: true,
    icon: (
      <GiMechanicGarage style={{ color: "slateblue", fontSize: "1.5em" }} />
    ),
  },
  {
    name: "Sign In",
    href: "/sign-in",
    page: SignInPage,
    displayForLoggedin: false,
    icon: <GoSignIn style={{ color: "rgb(39, 122, 39)", fontSize: "1.5em" }} />,
  },
];
