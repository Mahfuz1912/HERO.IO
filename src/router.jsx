import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import App from "./component/app/App";
import Installation from "./component/installation/Installation";

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
    ],
  },
]);
