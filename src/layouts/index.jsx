import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "../contexts/theme";

const Layout = ({ children }) => {
  // TODO: Fix re-rendering
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = { children: PropTypes.any };

export default Layout;
