import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import Button from "./index";

export interface Props {
  children?: React.ReactText;
}

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary: React.VFC<Props> = () => <Button>Button</Button>;
