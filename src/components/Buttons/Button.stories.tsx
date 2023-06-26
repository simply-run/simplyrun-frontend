import type { Meta, StoryObj } from '@storybook/react';

import { BasicButton } from './BasicButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof BasicButton> = {
  title: 'Buttons/Default Button',
  component: BasicButton,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
};
export default meta;
type Story = StoryObj<typeof BasicButton>;

export const Default: Story = {
  args: {
    children: 'BasicButton',
  },
};
