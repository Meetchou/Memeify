import ErrorPage from "../../templates/errorTemplate";

const Error404 = () => {
  return (
    <ErrorPage
      title="Sorry"
      description=" Sorry, the page you are looking for cannot be found.
      Please check the URL or try using the search bar above."
      img="/images/404Error.svg"
    />
  );
};

export default Error404;
