import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Seo } from "../components/seo";
import "../styles/index.scss";

const Home = () => {
  const { title } = useSiteMetadata();

  return <div>{title}</div>;
};

export default Home;

export const Head = () => <Seo title={`Beyond The Downpour`} />;
