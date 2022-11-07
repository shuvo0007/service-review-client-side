import Footer from "../../Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <hr />
      <Outlet></Outlet>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Home;
