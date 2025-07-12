import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, type ButtonProps } from './button';
import { Check, ChevronRight, LoaderCircle, LogIn, Save, X } from 'lucide-react';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['variant', 'color', 'size', 'fullWidth'],
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select', options: ['fill', 'outline', 'ghost', 'link'] },
      description: 'The visual style of the button',
    },
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'] },
      description: 'The color scheme of the button',
    },
    size: {
      control: { type: 'select', options: ['xs', 'small', 'medium', 'large'] },
      description: 'The size of the button',
    },
  },
  tags: ['autodocs'],
  args: { onClick: fn(), fullWidth: false, disabled: false },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {

    children: (<><Save /> Save</>),
    variant: "fill",
    color: 'primary',
    size: "small",

  }
};

export const Secondary: Story = {
  args: {
    // variant: "secondary",
    children: (<><LogIn /> Sign In</>),
    variant: "fill",
    color: 'secondary',
    size: "small",
  }
};

export const Outline: Story = {
  args: {
    // variant: "secondary",
    children: (<>Next <ChevronRight /></>),
    variant: "outline",
    color: 'primary',
    size: "small",
  }
};

export const Ghost: Story = {
  args: {
    // variant: "secondary",
    children: (<>Cancel</>),
    variant: "ghost",
    color: 'primary',
    size: "small",
  }
};

export const Link: Story = {
  args: {
    // variant: "secondary",
    children: (<>Link</>),
    variant: "link",
    color: 'primary',
    size: "small",
  }
};

export const Loading: Story = {
  args: {
    // variant: "secondary",
    children: (<><LoaderCircle className="animate-spin" /> Please Wait</>),
    variant: "fill",
    color: "primary",
    size: "small",
  }
};


export const Icon: Story = {
  args: {
    children: (<></>),
    variant: "fill",
    color: 'primary',
    size: "xs",
    iconOnly: true,
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args}>
        <Check />
      </Button>
      <Button {...args}>
        <X />
      </Button>
    </div>
  ),
};
