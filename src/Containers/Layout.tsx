import React from "react";
import NavigationBar from "../Components/NavigationBar";

const Layout: React.FC = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
    </>
  );
};

export default Layout;
