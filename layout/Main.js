import React from "react";
import { Header } from "../components/Header";

const Main = ({ children }) => {
  return (
    <>
    
      <Header />
      {children}
      <footer>Main Footer</footer>
    </>
  );
};

export default Main;
