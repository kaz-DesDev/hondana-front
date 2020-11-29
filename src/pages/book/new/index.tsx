import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { gql, useQuery } from "@apollo/client";
import { useBookQuery } from "../../../@types/codegen/graphql";
import withApollo from "../../../lib/apollo";

const GetBookInformation: React.FC = () => {
  const { data, loading, error } = useBookQuery({
    variables: {
      isbn: "9784488028022",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <h1>Book</h1>
      {data && data.book && <div>{data.book.title}</div>}
    </Fragment>
  );
};

export default withApollo({ ssr: true })(GetBookInformation);
