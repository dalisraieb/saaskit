import type { Meta, StoryObj } from '@storybook/react-vite';
import Typography, { TypographyProps } from './typography';


const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ['children', 'size', 'color', 'fontWeight', 'className', 'textTransform'],
        }
    },
    tags: ['autodocs'],
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof meta>;


export const variants: Story = {
    args: {
        children: (<>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam quaerat ullam asperiores mollitia iste, assumenda eum harum architecto corporis inventore magni doloremque totam, error, ipsam ipsum ipsa cupiditate odio eius.</>),
    },
    render: (args) => (
        <div className='space-y-4 p-8 pt-0'>
            {
                ['xs', 'small', 'base', 'large', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].map((size) => (
                    <Typography key={size} size={size as TypographyProps['size']} {...args}>
                        {`Typography Size: ${size}`}
                    </Typography>
                ))
            }
        </div>
    ),
};