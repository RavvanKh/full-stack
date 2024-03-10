import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/client/hero/Hero"));
const NewCollections = dynamic(
  () => import("@/components/client/newCollections/NewCollections")
);
const NewsLetter = dynamic(
  () => import("@/components/client/newsLetter/NewsLetter")
);
const Offers = dynamic(() => import("@/components/client/offers/Offers"));
const Popular = dynamic(() => import("@/components/client/popular/Popular"));

const Shop = () => {
  return (
    <section>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </section>
  );
};

export default Shop;
