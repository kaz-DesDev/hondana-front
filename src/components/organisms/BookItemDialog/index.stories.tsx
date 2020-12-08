import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Book } from "types/codegen/graphql";
import { useBookQuery } from "types/codegen/graphql";

import BookItemDialog from "./index";

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
  title: "Components/Organisms/BookItemDialog",
  component: BookItemDialog,
} as Meta;

const Template: Story = (args) => <BookItemDialog {...args} />;

export const DefaultBookItemDialog = Template.bind({});
DefaultBookItemDialog.args = {
  book: book,
};
