import type { Meta, StoryObj } from '@storybook/react-vite';
import Typography, { TypographyProps } from './typography';

const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['className'],
        }
    },
    argTypes: {
        color: {
            control: { type: 'select', options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'] },
            description: 'The color scheme of the typography',
        },
        size: {
            control: { type: 'select', options: ['xs', 'small', 'medium', 'large'] },
            description: 'The size of the typography',
        },
        fontWeight: {
            control: { type: 'select', options: ['extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'] },
            description: 'The font weight of the typography',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: "base",
        children: 'Primary Typography',
        color: "primary",
    }
};

export const Foreground: Story = {
    args: {
        size: "base",
        children: 'Foreground Typography',
        color: "foreground"
    }
};

export const Subtle: Story = {
    args: {
        size: "base",
        children: 'Subtle Typography',
        color: "subtle"
    }
};


export const Muted: Story = {
    args: {
        size: "base",
        children: 'Muted Typography',
        color: "muted"
    }
};


export const Error: Story = {
    args: {
        size: "base",
        children: 'Error Typography',
        color: "error"
    }
};

export const Info: Story = {
    args: {
        size: "base",
        children: 'Info Typography',
        color: "info"
    }
};

export const Success: Story = {
    args: {
        size: "base",
        children: 'Success Typography',
        color: "success"
    }
};


export const Warning: Story = {
    args: {
        size: "base",
        children: 'Warning Typography',
        color: "warning"
    }
};
