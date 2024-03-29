import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import BecomeAffiliate from "../Pages/BecomeAffiliate/BecomeAffiliate";
import Cart from "../Pages/Cart/Cart";
import Category from "../Pages/Category/Category";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CustomerService from "../Pages/CustomerService/CustomerService";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Manufacturer from "../Pages/Manufacturer/Manufacturer";
import NotFound from "../Pages/NotFound/NotFound";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import SellProducts from "../Pages/SellProducts/SellProducts";
import Shop from "../Pages/Shop/Shop";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import Wholesale from "../Pages/Wholesale/Wholesale";
import PrivateRoute from "./PrivateRoute";

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
        path: "/wholesale",
        element: <Wholesale></Wholesale>
      },
      {
        path: "/customer-service",
        element: <CustomerService></CustomerService>
      },
      {
        path: "/sell-products",
        element: <SellProducts></SellProducts>
      },
      {
        path: "/become-affiliate",
        element: <BecomeAffiliate></BecomeAffiliate>
      },
      {
        path: "/manufacturer",
        element: <Manufacturer></Manufacturer>
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
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        // children: [
        //   {
        //     path: "/administrator",
        //     element: <Administrator></Administrator>
        //   },
        //   // {
        //   //   path: "/home",
        //   //   element: <Home></Home>
        //   // },
        // ]
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
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