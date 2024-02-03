import React from "react";
import { Link } from "gatsby";
import { Seo } from "../../components/seo";
import { useTheme } from "../../contexts/theme";

const Page2 = () => {
  const { test } = useTheme();
  return (
    <>
      Page 2 - {test}
      <br />
      <br />
      <Link to={`/`}>Go Home</Link>
      <br />
      <Link to={`/page/1`}>Previous Page</Link>
      <br />
      <Link to={`/page/3`}>Next Page</Link>
    </>
  );
};
Page2.propTypes = {};

export default Page2;

export const Head = () => <Seo title={`Page 2!`} />;
