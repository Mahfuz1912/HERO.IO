import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import App from "./component/app/App";
import Installation from "./component/installation/Installation";
import Error from "./component/SharedComponent/Error";
import Home from "./component/Home/Home";
import SingleCardDetails from "./component/app/SingleCardDetails";

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
      {
        path: "/app/:id",
        element: <SingleCardDetails />,
        loader: async ({ params }) => {
          const DetailsData = await fetch("/Data.json");
          const data = await DetailsData.json();
          const singleDetails = data.find((detail) => detail.id == params.id);
          return singleDetails;
        },
      },
    ],
  },
]);
