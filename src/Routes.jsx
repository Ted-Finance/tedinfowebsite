import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePageDesktop from "pages/HomePageDesktop";
import SendReceiveMoneyDesktopTwo from "pages/SendReceiveMoneyDesktopTwo";
import SendReceiveMoneyDesktop from "pages/SendReceiveMoneyDesktop";
import SendReceiveMoneyDesktopThree from "pages/SendReceiveMoneyDesktopThree";
import SendReceiveMoneyDesktopOne from "pages/SendReceiveMoneyDesktopOne";
import SendReceiveMoneyDesktopFour from "pages/SendReceiveMoneyDesktopFour";
import ExchangeDesktop from "pages/ExchangeDesktop";
import MacBookPro16One from "pages/MacBookPro16One";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePageDesktop /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home",
      element: <HomePageDesktop />,
    },
    {
      path: "about",
      element: <SendReceiveMoneyDesktopTwo />,
    },
    {
      path: "sendreceivemoneydesktop",
      element: <SendReceiveMoneyDesktop />,
    },
    {
      path: "investment",
      element: <SendReceiveMoneyDesktopThree />,
    },
    {
      path: "virtualcard",
      element: <SendReceiveMoneyDesktopOne />,
    },
    {
      path: "sendreceivemoney",
      element: <SendReceiveMoneyDesktopFour />,
    },
    {
      path: "exchange",
      element: <ExchangeDesktop />,
    },
    // {
    //   path: "macbookpro16one",
    //   element: <MacBookPro16One />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;
