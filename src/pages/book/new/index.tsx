import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useBookQuery } from "../../../@types/codegen/graphql";
import withApollo from "../../../lib/apollo";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Book from "../../../components/templates/Book";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const GetBookInformation: React.FC = () => {
  const [isbn, setIsbn] = React.useState("9784488028022");
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(event.target.value);
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

      <form className={classes.root} noValidate autoComplete="off">
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">ISBN</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={isbn}
            onChange={handleChange}
            label="Isbn"
          />
        </FormControl>
      </form>

      <Book isbn={isbn} />
    </Fragment>
  );
};

export default withApollo({ ssr: true })(GetBookInformation);
