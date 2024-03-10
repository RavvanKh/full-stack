import style from "./offers.module.scss";
import exclusiveImg from "@/public/assets/exclusive_image.png";

const Offers = () => {
  return (
    <section className={style.offers}>
      <div className={style.offersLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on BestSeller Products</p>
        <button>Check Now</button>
      </div>
      <div className={style.offersRight}>
        <img src={exclusiveImg.src} alt="exclusive" />
      </div>
    </section>
  );
};

export default Offers;
