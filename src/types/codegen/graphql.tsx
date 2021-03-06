import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: "Query";
  books: Array<Maybe<Book>>;
  book?: Maybe<Book>;
};

export type QueryBookArgs = {
  isbn: Scalars["ID"];
};

export type Book = {
  __typename?: "Book";
  isbn: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  volume?: Maybe<Scalars["String"]>;
  series?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
  pubdate?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addBook: BookUpdateResponse;
};

export type MutationAddBookArgs = {
  isbn: Scalars["ID"];
};

export type BookUpdateResponse = {
  __typename?: "BookUpdateResponse";
  success: Scalars["Boolean"];
  message?: Maybe<Scalars["String"]>;
  book?: Maybe<Book>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type AddBookMutationVariables = Exact<{
  isbn: Scalars["ID"];
}>;

export type AddBookMutation = { __typename?: "Mutation" } & {
  addBook: { __typename?: "BookUpdateResponse" } & Pick<
    BookUpdateResponse,
    "success" | "message"
  > & {
      book?: Maybe<
        { __typename?: "Book" } & Pick<
          Book,
          | "isbn"
          | "title"
          | "volume"
          | "series"
          | "publisher"
          | "pubdate"
          | "cover"
          | "author"
        >
      >;
    };
};

export type BookQueryVariables = Exact<{
  isbn: Scalars["ID"];
}>;

export type BookQuery = { __typename?: "Query" } & {
  book?: Maybe<
    { __typename?: "Book" } & Pick<
      Book,
      | "isbn"
      | "title"
      | "volume"
      | "series"
      | "publisher"
      | "pubdate"
      | "cover"
      | "author"
    >
  >;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = { __typename?: "Query" } & {
  books: Array<
    Maybe<
      { __typename?: "Book" } & Pick<
        Book,
        | "isbn"
        | "title"
        | "volume"
        | "series"
        | "publisher"
        | "pubdate"
        | "cover"
        | "author"
      >
    >
  >;
};

export const AddBookDocument = gql`
  mutation addBook($isbn: ID!) {
    addBook(isbn: $isbn) {
      success
      message
      book {
        isbn
        title
        volume
        series
        publisher
        pubdate
        cover
        author
      }
    }
  }
`;
export type AddBookMutationFn = Apollo.MutationFunction<
  AddBookMutation,
  AddBookMutationVariables
>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      isbn: // value for 'isbn'
 *   },
 * });
 */
export function useAddBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBookMutation,
    AddBookMutationVariables
  >
) {
  return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(
    AddBookDocument,
    baseOptions
  );
}
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<
  AddBookMutation,
  AddBookMutationVariables
>;
export const BookDocument = gql`
  query book($isbn: ID!) {
    book(isbn: $isbn) {
      isbn
      title
      volume
      series
      publisher
      pubdate
      cover
      author
    }
  }
`;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      isbn: // value for 'isbn'
 *   },
 * });
 */
export function useBookQuery(
  baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>
) {
  return Apollo.useQuery<BookQuery, BookQueryVariables>(
    BookDocument,
    baseOptions
  );
}
export function useBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>
) {
  return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(
    BookDocument,
    baseOptions
  );
}
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const GetBooksDocument = gql`
  query GetBooks {
    books {
      isbn
      title
      volume
      series
      publisher
      pubdate
      cover
      author
    }
  }
`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>
) {
  return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    baseOptions
  );
}
export function useGetBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBooksQuery,
    GetBooksQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    baseOptions
  );
}
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<
  typeof useGetBooksLazyQuery
>;
export type GetBooksQueryResult = Apollo.QueryResult<
  GetBooksQuery,
  GetBooksQueryVariables
>;
