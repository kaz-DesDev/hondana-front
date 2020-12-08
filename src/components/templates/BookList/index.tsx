import React, { Fragment } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Book } from "types/codegen/graphql";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import BookListItem from "components/organisms/BookListItem";

export interface BookListProps {
  books: Book[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 800,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: 80,
      maxHeight: "100%",
    },
    title: {
      fontSize: "1.6rem",
    },
    author: {
      fontSize: "1rem",
    },
  })
);

const BookList: React.FC<BookListProps> = ({ books }) => {
  const classes = useStyles();

  const list = [];

  for (const i in books) {
    list.push(<BookListItem book={books[i]} />);
  }

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {(() => {
            if (list.length === 0) {
              return (
                <div>
                  <span>Nodata</span>
                  <p>ISBNを入力して本を追加しましょう！</p>
                </div>
              );
            } else {
              return list;
            }
          })()}
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default BookList;
