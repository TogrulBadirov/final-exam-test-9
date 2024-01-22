import { Helmet } from "react-helmet-async";
import "./index.scss";

const NoPage = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <h2>Page Not Found! Error 404</h2>
    </>
  );
};

export default NoPage;
