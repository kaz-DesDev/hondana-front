import React from "react";
import ReactDOM from "react-dom";
import { useBookQuery } from "../../@types/codegen/graphql";
import withApollo from "../../lib/apollo";

const App = () => {
  const { data, loading, error } = useBookQuery({
    variables: {
      isbn: "9784488028022",
    },
  });

  if (loading) return <div className="App"> Loading... </div>;

  return (
    <div className="App">
      <h1>Book</h1>
      {data && data.book && <div>{data.book.title}</div>}
    </div>
  );
};

export default withApollo({ ssr: true })(App);
