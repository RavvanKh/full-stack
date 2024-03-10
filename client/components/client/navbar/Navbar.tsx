"use client";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import style from "./navbar.module.scss";
import { menuTypes } from "@/constants";
import Link from "next/link";
import navLogo from "@/public/assets/logo.png";
import cardIcon from "@/public/assets/cart_icon.png";
import dynamic from "next/dynamic";
import { useShopContext } from "@/context/ShopContext";
import { IoMdMenu } from "react-icons/io";
import LogoutConfirmation from "./LogoutConfirmation";
import { useRouter } from "next/navigation";

const NavLink = dynamic(() => import("./NavLink"));
const Navbar = () => {
  const { getTotalCardItems } = useShopContext();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();
  
  const handleLogout = () => {
    document.body.style.overflow = "hidden";
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmation(false);
    setIsLoggedIn(false);
    localStorage.removeItem("auth-token");
    document.body.style.overflow = "auto";
    router.push("/login");
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
    document.body.style.overflow = "auto";
  };
  const toggleDropdown: MouseEventHandler<
    HTMLDivElement | HTMLLIElement
  > = () => {
    menuRef.current?.classList.toggle(style.navMenuVisible);
  };

  const isNodeContained = (
    parentNode: Node | null,
    pathToCheck: EventTarget[]
  ) => {
    return pathToCheck.some(
      (node) => node instanceof Node && parentNode?.contains(node)
    );
  };
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("auth-token") ? true : false);
    const handleClick = (e: MouseEvent) => {
      const menuNode = menuRef.current;
      const divNode = divRef.current;

      if (menuNode && divNode) {
        const pathToCheck = e.composedPath();

        const isContainedMenu = isNodeContained(menuNode, pathToCheck);
        const isContainedDiv = isNodeContained(divNode, pathToCheck);

        if (!isContainedMenu && !isContainedDiv) {
          menuRef.current?.classList.remove(style.navMenuVisible);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <nav className={style.navbar}>
      {showConfirmation && (
        <LogoutConfirmation
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
      <div className={style.navLogo}>
        <Link href="/">
          <img src={navLogo.src} alt="nav-logo" />
          <p>Shopper</p>
        </Link>
      </div>
      <ul className={style.navMenu} ref={menuRef}>
        {menuTypes?.map((menuType, index) => (
          <li key={index} onClick={toggleDropdown}>
            <NavLink href={menuType.url} label={menuType.value} />
          </li>
        ))}
      </ul>

      <div className={style.navLoginCard}>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link href="/login">
            <button>Login</button>
          </Link>
        )}
        <Link href="/card">
          <img src={cardIcon.src} alt="card" />
        </Link>
        <div className={style.navCardCount}>{getTotalCardItems()}</div>
        <div
          className={style.navDropdown}
          onClick={toggleDropdown}
          ref={divRef}
        >
          <IoMdMenu size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
