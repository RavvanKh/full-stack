import style from "./newsLetter.module.scss";

const NewsLetter = () => {
  return (
    <section className={style.newsLetter}>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
