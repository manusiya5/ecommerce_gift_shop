import { useRoutes } from "react-router-dom";
import Shop from "../shop/Shop.tsx";
import Home from "../home/home.tsx";
import Whyus from "../whyUs/Whyus.tsx";
import Contact from "../contact/contact.tsx";
import Testimonial from "../testimonal/testimonial.tsx";
import LoginPage from "../topNavBar/login/LoginPage.tsx";
// import LoginPage from "../topNavBar/login/LoginPage.tsx";
function Router() {
  let router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/why-us",
      element: <Whyus />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/testimonial",
      element: <Testimonial />,
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ]);
  return router;
}

export default Router;
