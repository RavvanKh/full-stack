// components/LogoutConfirmation.js
import { useState } from "react";
import style from "./navbar.module.scss";
const LogoutConfirmation = ({ onConfirm, onCancel }: any) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className={style.logoutConfirmation}>
      <div className={style.container}>
        <p>Are you sure you want to logout?</p>
        <div>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmation;
