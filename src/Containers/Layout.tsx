import React from "react";
import { Container } from "reactstrap";
import NavigationBar from "../Components/NavigationBar";

const Layout: React.FC = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Container>{props.children}</Container>
    </React.Fragment>
  );
};

export default Layout;
