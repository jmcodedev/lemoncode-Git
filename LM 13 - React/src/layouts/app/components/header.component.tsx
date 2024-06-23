import React from "react";
import logo from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
  const { username } = useProfileContext();
  return (
    <header className={classes.header}>
      <div>
        <img src={logo} alt="logo" className={classes.headerLogo} />
        <div className={classes.usuario}>
          <p>{username}</p>
        </div>
      </div>
    </header>
  );
};
