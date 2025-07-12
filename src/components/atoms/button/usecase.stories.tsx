import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, type ButtonProps } from './button';
import { Check, ChevronLeft, ChevronRight, EllipsisVertical, HelpCircle, Info, LoaderCircle, LogIn, Search, Settings, Trash2, X } from 'lucide-react';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        controls: {
            include: ['size'],
        }
    },
    argTypes: {
        size: {
            control: { type: 'radio', options: ['xs', 'small', 'medium', 'large'] },
            description: 'The size of the button',
        },
    },
    tags: ['autodocs'],
    args: { onClick: fn(), size: "medium" },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;


export const useCases = {
    render: (args: { size: ButtonProps['size'] }) => (
        <div className="space-y-4" >
            <div className="flex gap-2">
                <Button {...args} variant="fill" color="primary" fullWidth>Save Changes</Button>
                <Button {...args} variant="fill" color="info" fullWidth>Upgrade Plan</Button>
            </div>

            <Button {...args} variant="fill" color="primary" fullWidth ><LogIn /> Sign In with Email</Button>


            <div className="flex gap-2">
                <Button {...args} variant="outline" color="secondary">Cancel</Button>
                <Button {...args} variant="ghost" color="secondary">Go Back </Button>
                <Button {...args} variant="ghost" color="secondary">Skip</Button>
            </div>

            <div className="flex gap-2">
                <Button {...args} variant="link" color="primary">Learn More</Button>
                <Button {...args} variant="link" color="secondary">Contact Us</Button>
            </div>

            <div className="flex gap-2">
                <Button {...args} variant="surface" color="secondary" iconOnly><EllipsisVertical /></Button>
                <Button {...args} variant="surface" color="info" iconOnly><HelpCircle /></Button>
                <Button {...args} variant="surface" color="warning" iconOnly><Info /></Button>
                <Button {...args} variant="outline" color="error" iconOnly><Trash2 /></Button>
                <Button {...args} variant="outline" color="success" iconOnly><Check /></Button>
            </div>

            <Button {...args} variant="fill" color="secondary">Login</Button>

            <div className='flex gap-2'>
                <Button {...args} variant="outline" color="secondary" disabled><ChevronLeft />Previous</Button>
                <Button {...args} variant="outline" color="secondary">Next <ChevronRight /></Button>

            </div>

            <div className='flex gap-2 justify-center'>
                <Button {...args} variant="outline" color="secondary" fullWidth><Settings /> Settings</Button>
                <Button {...args} variant="outline" color="secondary" fullWidth><Search /> Search</Button>
            </div>

            <div className='flex gap-2'>
                <Button {...args} variant="surface" color="secondary" disabled>
                    <LoaderCircle className="animate-spin" /> Searching ...
                </Button>
                <Button {...args} variant="surface" color="error" disabled>
                    <LoaderCircle className="animate-spin" /> Deleting ...
                </Button>
                <Button {...args} variant="fill" color="info" iconOnly disabled>
                    <LoaderCircle className="animate-spin" />
                </Button>
            </div>

            <div className='flex gap-2'>
                <Button {...args} variant="surface" color="error">
                    <X />
                    Reject
                </Button>
                <Button {...args} variant="outline" color="success">
                    Accept
                    <Check />
                </Button>
            </div>


            <div className='flex gap-2'>
                <Button {...args} variant="ghost" color="secondary">
                    Close
                </Button>
                <Button {...args} variant="fill" color="primary">
                    Confirm
                </Button>
            </div>


        </div>
    )
}