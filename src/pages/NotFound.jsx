import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import Footer from "../components/Footer"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="overflow-x-hidden w-full h-full">
        <Header />
        <div className="2xl:mx-[8rem] xl:mx-[5rem] mx-[2em] lg:mt-8">
          <h1>Opps! Invalid Page, use the top navigate botton to route to a valid page</h1>
          <TopFooter />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
