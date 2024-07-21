import { createBrowserRouter } from "react-router-dom";
import Articles from "../pages/Articles";
import Studying from "../pages/Studying";
import Consuming from "../pages/Consuming";
import Shower from "../pages/Shower";
import About from "../pages/About";
import Home from "../pages/Home";
import ContentPage from "../components/ContentPage";

const router = createBrowserRouter([
  { path: "", element: <ContentPage><Home/></ContentPage> },
  { path: "/articles", element: <ContentPage><Articles /></ContentPage> },
  { path: "/studying", element: <ContentPage><Studying /> </ContentPage> },
  { path: "/consuming", element: <ContentPage><Consuming /></ContentPage>  },
  { path: "/shower", element: <ContentPage><Shower /></ContentPage>  },
  { path: "/about", element: <ContentPage><About /></ContentPage>  },
]);

export default router;
