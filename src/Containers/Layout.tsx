import React from "react";
import NavigationBar from "../Components/NavigationBar";
import styled from "styled-components";
import { Container } from "reactstrap";

const Layout: React.FC = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
    </>
  );
};

export default Layout;
