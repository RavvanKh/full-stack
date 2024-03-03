import dynamic from "next/dynamic";
import React, { FC } from "react";

const Shop = dynamic(() => import("@/pages/client/Shop"));
const Navbar = dynamic(() => import("@/components/client/navbar/Navbar"));
const Footer = dynamic(() => import("@/components/client/footer/Footer"));

const Home: FC = () => {
  return (
    <main>
      <Navbar />
      <Shop />
      <Footer />
    </main>
  );
};

export default Home;
