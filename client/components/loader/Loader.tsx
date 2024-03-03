import React from "react";
import styles from "./loader.module.scss";
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
