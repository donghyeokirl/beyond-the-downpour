import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Seo } from "../components/seo";
import { Link } from "gatsby";

const Home = () => {
  const { title } = useSiteMetadata();

  return (
    <>
      Hi, grey! Welcome to {title}!
      <br />
      <br />
      <Link to="/page/1">Start!</Link>
    </>
  );
};

export default Home;

export const Head = () => <Seo title={`Welcome!`} />;
