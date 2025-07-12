import { FC, ReactNode } from "react";


export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'xs' | 'small' | 'base' | 'large' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    color?: 'primary' | 'secondary' | 'danger';
    className?: string;
    children: ReactNode;
}



export const Typography: FC<TypographyProps> = ({ color, className, children, size = "base", ...props }) => {
    const base =
        '';

    const sizeMap = {
        xs: 'text-xs [&>svg]:size-3.5 gap-0.5',
        small: 'text-sm [&>svg]:size-4 gap-1',
        base: 'text-base [&>svg]:size-4.5 gap-2 font-medium',
        large: 'text-lg [&>svg]:size-5 gap-2 font-semibold',
        xl: 'text-xl [&>svg]:size-5.5  gap-2 font-semibold',
        '2xl': 'text-2xl [&>svg]:size-6 gap-2 font-bold',
        '3xl': 'text-3xl [&>svg]:size-7 gap-2 font-bold',
        '4xl': 'text-4xl [&>svg]:size-8 gap-2 font-bold',
        '5xl': 'text-5xl [&>svg]:size-9 gap-2 font-bold',
        '6xl': 'text-6xl [&>svg]:size-10 gap-2 font-bold',
    };

    // const variantKey = `${variant}`;


    return (
        <h1
            className={`${base} ${sizeMap[size]} ${className}`}
            {...props}>
            {children}
        </h1>
    )
}

