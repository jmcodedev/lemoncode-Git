import * as React from "react";
import { HeaderComponent, NavbarComponent } from "./components";
import { FooterComponent } from "./components/footer.component";
import classes from "./app-layout.module.css";
// import { useProfileContext } from "@/core/profile";
interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  // const { username } = useProfileContext();

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <main className={classes.mainContent}>{children}</main>

      <FooterComponent />
    </>
  );
};
