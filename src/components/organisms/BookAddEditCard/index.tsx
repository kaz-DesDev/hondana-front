import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Book, useAddBookMutation } from "../../../types/codegen/graphql";
import Paper from "@material-ui/core/Paper";
import { Button, Divider, TextField } from "@material-ui/core";

export interface BookAddEditCardProps {
  book?: Book;
  isbn: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick?: () => void;
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
  handleChange,
  handleClick,
}) => {
  const classes = useStyles();

  const [addBookMutation, { data, loading, error }] = useAddBookMutation({
    variables: {
      isbn: isbn,
    },
  });

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
        <Button
          size="small"
          color="primary"
          onClick={async () => {
            await addBookMutation({
              variables: {
                isbn: isbn,
              },
            });
          }}
        >
          Save
        </Button>
      </Paper>
    </div>
  );
};

export default BookAddEditCard;
