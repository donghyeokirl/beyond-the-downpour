import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Seo } from "../components/seo";
import "../styles/index.scss";

const Home = () => {
  const { title } = useSiteMetadata();

  return <div>Hi, grey! Welcome to {title}!</div>;
};

export default Home;

export const Head = () => <Seo title={`Welcome!`} />;
