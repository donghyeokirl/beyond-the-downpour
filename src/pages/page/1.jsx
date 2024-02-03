import React from "react";
import { Link } from "gatsby";
import { Seo } from "../../components/seo";
import { useTheme } from "../../contexts/theme";

const Page1 = () => {
  const { test, setTest } = useTheme();
  return (
    <>
      Page 1 - {test}
      <br />
      <br />
      <button onClick={() => setTest("What")}>test btn</button>
      <br />
      <Link to={`/`}>Go Home</Link>
      <br />
      <Link to={`/page/2`}>Next Page</Link>
    </>
  );
};
Page1.propTypes = {};

export default Page1;

export const Head = () => <Seo title={`Page 1!`} />;
