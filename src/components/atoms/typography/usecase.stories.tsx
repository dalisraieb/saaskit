import type { Meta, StoryObj } from '@storybook/react-vite';
import Typography, { TypographyProps } from './typography';
import { Button } from '../button/button';
import { EllipsisVertical } from 'lucide-react';


const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['children', 'color', 'size', 'fontWeight', 'className', 'textTransform'],
        }
    },
    tags: ['autodocs'],
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;



export const usecase: Story = {
    args: {
        children: (<>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius.</>),
        color: 'primary',
    },
    render: (args) => (

        <div className='space-y-4'>
            <div className='flex justify-between'>
                <div className='space-y-1'>
                    <Typography size="xs" children="Welcome to our platform!" className='text-foreground-muted' />
                    <Typography size="xl" children="Dashboard Overview" className='text-foreground' />
                </div>
                <Button iconOnly size="small" variant="fill" color="secondary"><EllipsisVertical /></Button>
            </div>
            <div className='space-y-2'>
                <Typography size="base" children="Quick insights into your recent activity" className='text-foreground' />
                <Typography children="Here you'll find a summary of your key metrics and important notifications. Explore the sections below for detailed reports and management options." size="small" className='text-foreground-subtle' />
            </div>
            <div className='flex justify-end space-x-4 mt-8'>
                {/* <Button size="small" variant="ghost" color="secondary">View Details</Button>
                <Button size="small" variant="fill" color="primary">Edit Profile</Button> */}
                <Button size="small" variant="ghost" color="secondary">View Details</Button>
                <Button size="small" variant="fill" color="primary">Edit Profile</Button>
            </div>
        </div>
    ),
};
