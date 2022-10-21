import React from "react";
import Header from "../../components/Header";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "65px" }}>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
