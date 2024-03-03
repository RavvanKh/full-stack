import React from "react";
import styles from "./notFound.module.scss";
import notFoundIcon from "@/public/assets/404.jpg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <p>Oops! The page you are looking for might be in another universe.</p>
        <div className={styles.notFoundFlex}>
          <img src={notFoundIcon.src} alt="Lost Astronaut" />
          <div>
            <Link href="/">Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
