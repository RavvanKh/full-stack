import style from "./navbar.module.scss";
import navLogo from "@/public/assets/nav-logo.svg";
import navProfile from "@/public/assets/nav-profile.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/panel">
        <img className={style.navLogo} src={navLogo.src} alt="nav-logo" />
      </Link>
      <img
        src={navProfile.src}
        alt="nav-profile"
        className={style.navProfile}
      />
    </nav>
  );
};

export default Navbar;
