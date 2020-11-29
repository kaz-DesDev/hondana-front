import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useBookQuery } from "../../../@types/codegen/graphql";
import withApollo from "../../../lib/apollo";

import Book from "../../../components/templates/Book";

const GetBookInformation: React.FC = () => {
  const [state, setState] = useState({
    isbn: "9784488028022",
  });

  const clearAllInputValue = () => {
    setState({
      isbn: "",
    });
  };

  // ISBNに関するonChangeハンドラ
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const target = e.target;
    const name = target.name;
    setState(() => {
      return { ...state, [name]: target.value };
    });
  };

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

      <input
        name="isbn"
        placeholder="0"
        value={state.isbn}
        onChange={handleInputChange}
      />

      {state.isbn}

      <Book isbn={state.isbn} />
    </Fragment>
  );
};

export default withApollo({ ssr: true })(GetBookInformation);
