import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Typography, type TypographyProps } from './typography';
import { Button } from '../button/button';
import { Check, EllipsisVertical, X } from 'lucide-react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Typography',
    component: Typography,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Typo: Story = {
    args: {
        children: (<>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius.</>),
        color: 'primary',
    },
    render: (args) => (
        <div className='space-y-4'>
            <div className='flex justify-between'>
                <div className='space-y-1'>
                    <Typography size="xs" children="Welcome to our platform!" className='text-foreground-muted' />
                    <Typography size="large" children="Dashboard Overview" className='text-foreground' />
                </div>
                <Button iconOnly size="small" variant="outline" color="secondary"><EllipsisVertical /></Button>
            </div>
            <div className='space-y-2'>
                <Typography size="base" children="Quick insights into your recent activity" className='text-foreground' />
                <Typography children="Here you'll find a summary of your key metrics and important notifications. Explore the sections below for detailed reports and management options." size="small" className='text-foreground-subtle' />
            </div>
            <div className='flex justify-end space-x-4 mt-8'>
                {/* <Button size="small" variant="ghost" color="secondary">View Details</Button>
                <Button size="small" variant="fill" color="primary">Edit Profile</Button> */}
                <Button size="small" variant="fill" color="error"> <X /></Button>
                <Button size="small" variant="fill" color="success">Agree <Check /></Button>
            </div>
        </div >
    ),
};
