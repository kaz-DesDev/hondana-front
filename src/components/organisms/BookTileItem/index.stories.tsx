import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Book } from "types/codegen/graphql";

import BookTileItem, { BookTileItemProps } from "./index";

const book: Book = {
  isbn: "9784788514348",
  title: "誰のためのデザイン　増補・改訂版",
  volume: "",
  series: "",
  publisher: "新曜社",
  pubdate: "20150420",
  cover: "https://cover.openbd.jp/9784788514348.jpg",
  author:
    "Ｄ・Ａ・ノーマン／著 岡本明／訳 安村通晃／訳 伊賀聡一郎／訳 野島久雄／訳",
};

export default {
  title: "Components/Organisms/BookTileItem",
  component: BookTileItem,
} as Meta;

const Template: Story<BookTileItemProps> = (args) => <BookTileItem {...args} />;

export const DefaultBookTileItem = Template.bind({});
DefaultBookTileItem.args = {
  book: book,
};
