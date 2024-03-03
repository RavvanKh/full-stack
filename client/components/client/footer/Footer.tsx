import React, { FC } from "react";
import style from "./footer.module.scss";
import logoBig from "@/public/assets/logo_big.png";
import instagramIcon from "@/public/assets/instagram_icon.png";
import pinterestIcon from "@/public/assets/pinterest_icon.png";
import whatsAppIcon from "@/public/assets/whatsapp_icon.png";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerLogo}>
        <img src={logoBig.src} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={style.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={style.footerSocialIcon}>
        <div className={style.footerIconsContainer}>
          <img src={instagramIcon.src} alt="instagram" />
        </div>
        <div className={style.footerIconsContainer}>
          <img src={pinterestIcon.src} alt="pinterest" />
        </div>
        <div className={style.footerIconsContainer}>
          <img src={whatsAppIcon.src} alt="whatsApp" />
        </div>
      </div>
      <div className={style.footerCopyright}>
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
