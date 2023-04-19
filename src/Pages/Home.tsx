import React from "react";
import Footer from "../organismes/footer/footer";
import Header from "../organismes/header/header";
import MemeSection from "../organismes/memeSection/memeSection";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MemeSection />
      <Footer />
    </>
  );
};

export default Home;
