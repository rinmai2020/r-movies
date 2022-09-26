import GoToTop from "components/Scroll/GoToTop";
import React from "react";
import Banner from "../components/Banner";
import Cinema from "../components/Cinema";
import Showing from "../components/Showing";

const Home = () => {
  return (
    <div>
      <Banner />
      <Showing />
      <Cinema />
      <GoToTop />
    </div>
  );
};

export default Home;
