import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import App from "./component/app/App";
import Installation from "./component/installation/Installation";
import Error from "./component/SharedComponent/Error";
import Home from "./component/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
