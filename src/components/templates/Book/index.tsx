import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { useBookQuery } from "../../../@types/codegen/graphql";
import withApollo from "../../../lib/apollo";

interface BookProps {
  isbn?: any;
}

// eslint-disable-next-line react/prop-types
const Book: React.FC<BookProps> = ({ isbn }) => {
  const { data, loading, error } = useBookQuery({
    variables: {
      isbn: isbn,
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

export default Book;
