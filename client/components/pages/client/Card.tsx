import dynamic from "next/dynamic";

const CardItems = dynamic(
  () => import("@/components/client/cardItems/CardItems")
);

const Card = () => {
  return (
    <section>
      <CardItems />
    </section>
  );
};

export default Card;
