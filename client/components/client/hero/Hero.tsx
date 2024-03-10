import style from "./hero.module.scss";
import handIcon from "@/public/assets/hand_icon.png";
import arrow from "@/public/assets/arrow.png";
import heroImage from "@/public/assets/hero_image.png";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.heroLeft}>
        <h2>New Arrivals Only</h2>
        <div>
          <div className={style.heroHandIcon}>
            <p>New</p>
            <img src={handIcon.src} alt="hand-icon" />
          </div>
          <p>Collection</p>
          <p>For everyone</p>
        </div>
        <div className={style.heroLatestBtn}>
          <div>Latest Collection</div>
          <img src={arrow.src} alt="arrow" />
        </div>
      </div>
      <div className={style.heroRight}>
        <img src={heroImage.src} alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
