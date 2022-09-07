import { Button } from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button",
  onClick: action("Primary Button was clicked."),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  size: "large",
};
