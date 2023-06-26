import type { Meta, StoryObj } from '@storybook/react';

import FillButton from './FillButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof FillButton> = {
  title: 'Buttons/Fill Buttons',
  component: FillButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
    },
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
type Story = StoryObj<typeof FillButton>;

export const Rounded: Story = {
  args: {
    type: 'rounded',
    children: 'Button',
  },
};
export const Square: Story = {
  args: {
    type: 'square',
    children: 'Button',
  },
};
export const FullRounded: Story = {
  args: {
    type: 'full-rounded',
    children: 'Button',
  },
};
