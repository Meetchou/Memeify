import ErrorPage from "../../templates/errorTemplate";

const Error500 = () => {
  return (
    <ErrorPage
      title=""
      description=" Sorry, an error occurred while retrieving the data. Please check your
    internet connection and try again."
      img="/images/error.svg"
    />
  );
};

export default Error500;
