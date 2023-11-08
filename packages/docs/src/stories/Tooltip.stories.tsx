import { Box, Button, Tooltip, TooltipProps } from "@castilho-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Pass over me!</Button>,
    content: "This is the element tooltip",
  },
  argTypes: {
    children: {
      control: {
        type: "null",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            background: "$gray700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "$20",
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
