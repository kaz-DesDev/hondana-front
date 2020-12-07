import React, { Fragment } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Book } from "types/codegen/graphql";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export interface BookListItemProps {
  book: Book;
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

const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.img} alt="complex" src={book.cover} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom className={classes.title}>
                  {book.title}
                </Typography>
                <Typography gutterBottom className={classes.author}>
                  著者: {book.author}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default BookListItem;
