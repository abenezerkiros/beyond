import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import Dashboard from "./Dashboard.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeSix from "./components/HomeSix/index.jsx";
import HomeSeven from "./components/HomeSeven/index.jsx";
import HomeEight from "./components/HomeEight/index.jsx";
import HomeDark from "./components/HomeDark/index.jsx";
import HomeRtl from "./components/HomeRtl/index.jsx";
import FormsLogin from "./components/Contact/FormsLogin"
import News from "./components/News/index.jsx";
import SingleNews from "./components/News/SingleNews.jsx";
import Service from "./components/Service/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";
import Shops from "./components/Shops/index.jsx";
import ShopDetails from './components/Shops/Details';
import Layout from "./components/Helper/Layout.jsx";
import CreateProject from "./CreateProject"
import ForgotPassword from "./ForgotPassword.jsx"
const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },
      {
        path: "/home-two",
        element: <HomeTwo />
      }, {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/home-three",
        element: <HomeThree />
      },
      {
        path: "/home-four",
        element: <HomeFour />
      },
      {
        path: "/home-five",
        element: <HomeFive />
      },
      {
        path: "/home-six",
        element: <HomeSix />
      },
      {
        path: "/home-seven",
        element: <HomeSeven />
      },
      {
        path: "/home-eight",
        element: <HomeEight />
      },
      {
        path: "/home-dark",
        element: <HomeDark />
      },
      {
        path: "/home-rtl",
        element: <HomeRtl />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news/single-news",
        element: <SingleNews />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/signup",
        element: <Contact />
      },
      {
        path: "/error",
        element: <Error />
      },
      {
        path: "/about-us-another",
        element: <AboutUsTwo />
      },
      {
        path: "/shops",
        element: <Shops />
      },
      {
        path: "/login",
        element: <FormsLogin />
      },
      {
        path: "/shops/shop-details",
        element: <ShopDetails />
      },{
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/create-project",
        element: <CreateProject />
      },
      {
        path: "*",
        element: <HomeOne />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
