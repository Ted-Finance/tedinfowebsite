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
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import SendReceiveMoney from "pages/SendReceiveMoney";
import ExchangePage from "pages/ExchangePage";
import VirtualcardPage from "pages/VirtualcardPage"
import InvestmentPage from "pages/InvestmentPage"
import MultiCurrencyPage from "pages/MultiCurrencyPage"
import UseTedPage from "pages/UseTedPage"

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage />, },
    { path: "*", element: <NotFound /> },
    {
      path: "home",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },

    {
      path: "sendreceivemoney",
      element: <SendReceiveMoney />,
    },

    {
      path: "multicurrency",
      element: <MultiCurrencyPage/>,
    },
    
    {
      path: "exchange",
      element: <ExchangePage />,
    },

    {
      path: "virtualcard",
      element: <VirtualcardPage />,
    },

    {
      path: "investment",
      element: <InvestmentPage />,
    },

    {
      path: "useted",
      element: <UseTedPage />,
    },

    {
      path: "sendreceivemoneydesktop",
      element: <SendReceiveMoneyDesktop />,
    },
    // {
    //   path: "macbookpro16one",
    //   element: <MacBookPro16One />,
    // },
  ]);

  return element;
};

export default ProjectRoutes;
