import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Book } from "types/codegen/graphql";
import Paper from "@material-ui/core/Paper";
import { Button, Divider, TextField } from "@material-ui/core";
import { ApolloError } from "@apollo/client";

export interface BookAddEditCardProps {
  book?: Book;
  isbn: string;
  loading?: boolean;
  error?: ApolloError;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 290,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: 80,
      maxHeight: "100%",
    },
  })
);

const BookAddEditCard: React.FC<BookAddEditCardProps> = ({
  book,
  isbn,
  loading,
  error,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            value={isbn}
            onChange={handleChange}
            label="ISBN"
            placeholder="ISBNを入力して書籍を検索"
            helperText="ISBNを入力すると書籍情報が自動で取得されます。"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            id="standard-full-width"
            value={book ? book.title : ""}
            color="primary"
            label="タイトル"
            fullWidth
            multiline
            disabled
            margin="normal"
          />
          <TextField
            id="standard-full-width"
            value={book ? book.author : ""}
            label="著者"
            fullWidth
            multiline
            disabled
            margin="normal"
          />
        </form>
        <Divider />
        <Button size="small">Cancel</Button>
        <Button size="small" color="primary">
          Save
        </Button>
      </Paper>
    </div>
  );
};

export default BookAddEditCard;
