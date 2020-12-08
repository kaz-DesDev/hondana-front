import * as Types from "./graphql";

import * as Operations from "./graphql";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { QueryHookOptions, useQuery } from "@apollo/react-hooks";
import * as Apollo from "apollo-client";
import React from "react";

export async function getServerPageBook(
  options: Omit<Apollo.QueryOptions<Types.BookQueryVariables>, "query">,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.BookQuery>({
    ...options,
    query: Operations.BookDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageBookComp = React.FC<{
  data?: Types.BookQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBook = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.BookQuery, Types.BookQueryVariables>
) => (WrappedComponent: PageBookComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.BookDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrBook = {
  getServerPage: getServerPageBook,
  withPage: withPageBook,
};
export async function getServerPageGetBooks(
  options: Omit<Apollo.QueryOptions<Types.GetBooksQueryVariables>, "query">,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.GetBooksQuery>({
    ...options,
    query: Operations.GetBooksDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetBooksComp = React.FC<{
  data?: Types.GetBooksQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetBooks = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetBooksQuery, Types.GetBooksQueryVariables>
) => (WrappedComponent: PageGetBooksComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetBooksDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetBooks = {
  getServerPage: getServerPageGetBooks,
  withPage: withPageGetBooks,
};
