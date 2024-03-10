import dynamic from "next/dynamic";

const Shop = dynamic(() => import("@/components/pages/client/Shop"));
const Navbar = dynamic(() => import("@/components/client/navbar/Navbar"));
const Footer = dynamic(() => import("@/components/client/footer/Footer"));

const Home = () => {
  return (
    <main>
      <Navbar />
      <Shop />
      <Footer />
    </main>
  );
};

export default Home;
