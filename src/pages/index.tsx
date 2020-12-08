import React from "react";
import ReactDOM from "react-dom";
import { NextPage } from "next";
import Head from "next/head";
import styles from "styles/Home.module.css";
import BookAddEditCard from "components/organisms/BookAddEditCard";
import withApollo from "lib/apollo";
import { Book, useBookQuery, useGetBooksQuery } from "types/codegen/graphql";
import BookList from "components/templates/BookList";
import { Grid } from "@material-ui/core";

// const book: Book = {
//   isbn: "9784788514348",
//   title: "誰のためのデザイン　増補・改訂版",
//   volume: "",
//   series: "",
//   publisher: "新曜社",
//   pubdate: "20150420",
//   cover: "https://cover.openbd.jp/9784788514348.jpg",
//   author:
//     "Ｄ・Ａ・ノーマン／著 岡本明／訳 安村通晃／訳 伊賀聡一郎／訳 野島久雄／訳",
// };

const Home: NextPage = () => {
  const [isbn, setIsbn] = React.useState("");
  const [book, setBook] = React.useState<Book>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(event.target.value);

    const { data, loading, error } = useBookQuery({
      variables: {
        isbn: isbn,
      },
    });
    setBook(!loading && !error && data && data.book ? data.book : null);
  };
  const { data, loading, error } = useGetBooksQuery({
    variables: {},
  });
  const books: Book[] =
    !loading && !error && data && data.books ? data.books : null;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Hondana!</h1>

        <Grid container spacing={3}>
          <Grid item xs={8}>
            <BookList books={books} />
          </Grid>
          <Grid item xs={4}>
            <BookAddEditCard
              book={book}
              isbn={isbn}
              handleChange={(event) => handleChange(event)}
            />
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
