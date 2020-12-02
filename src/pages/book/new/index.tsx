import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import withApollo from "../../../lib/apollo";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Book from "../../../components/templates/Book";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      flexGrow: 1,
      margin: "auto",
      textAlign: "center",
    },
  })
);

const GetBookInformation: React.FC = () => {
  const [isbn, setIsbn] = React.useState("9784488028022");
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(event.target.value);
  };

  return (
    <Fragment>
      <h1>ISBNを入力して書籍情報を取得</h1>

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
