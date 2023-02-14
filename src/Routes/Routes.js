import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Category from "../Pages/Category/Category";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/category",
        element: <Category></Category>
      },
      {
        path: "/details",
        element: <Details></Details>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions></TermsConditions>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      },
    ],
  },
]);

export default router;