import React, { Fragment } from "react";
import { useBookQuery } from "../../../@types/codegen/graphql";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

interface BookProps {
  isbn?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 256,
      height: 256,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

// eslint-disable-next-line react/prop-types
const Book: React.FC<BookProps> = ({ isbn }) => {
  const classes = useStyles();
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
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={data.book.cover}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {data.book.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  著者: {data.book.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ISBN: {data.book.isbn}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Book;
