import React, { FC } from 'react';

type SizeKey =
    | 'xs' | 'small' | 'base' | 'large' | 'xl'
    | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';


type fontWeightKey = 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'

type colorKey = 'primary' | 'foreground' | 'subtle' | 'muted' | 'error' | 'info' | 'success' | 'warning'


export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    color?: colorKey; // if you're planning to use this
    size?: SizeKey;
    className?: string;
    children: React.ReactNode;
    fontWeight?: fontWeightKey;
    textTransform?: 'uppercase' | 'capitalize';
}

const Typography: FC<TypographyProps> = ({
    color = "foreground",
    className = '',
    children,
    size = 'base',
    textTransform,
    fontWeight,
    ...props
}) => {
    const base = ''; // you can define shared base styles here

    const fontWeightMap: Record<fontWeightKey, string> = {
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
    };

    const sizeMap: Record<SizeKey, { element: string, className: string }> = {
        xs: {
            element: 'small',
            className: `text-xs leading-4 [&>svg]:size-3.5 gap-0.5 ${fontWeight ? fontWeightMap[fontWeight] : ''}`,
        },
        small: {
            element: 'p',
            className: `text-sm leading-5 [&>svg]:size-4 gap-1 ${fontWeight ? fontWeightMap[fontWeight] : ''}`,
        },
        base: {
            element: 'p',
            className: `text-base leading-6 [&>svg]:size-4.5 gap-2 ${fontWeight ? fontWeightMap[fontWeight] : 'font-medium '}`,
        },
        large: {
            element: 'h6',
            className: `text-lg leading-6 [&>svg]:size-5 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-semibold'}`,
        },
        xl: {
            element: 'h5',
            className: `text-xl leading-7 [&>svg]:size-5.5 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-semibold'}`,
        },
        '2xl': {
            element: 'h4',
            className: `text-2xl leading-8 [&>svg]:size-6 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-bold'}`,
        },
        '3xl': {
            element: 'h3',
            className: `text-3xl leading-9 [&>svg]:size-7 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-bold'}`,
        },
        '4xl': {
            element: 'h2',
            className: `text-4xl leading-10 [&>svg]:size-8 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-bold'}`,
        },
        '5xl': {
            element: 'h1',
            className: `text-5xl leading-none [&>svg]:size-9 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-bold'}`,
        },
        '6xl': {
            element: 'h1',
            className: `text-6xl leading-none [&>svg]:size-10 gap-2  ${fontWeight ? fontWeightMap[fontWeight] : 'font-bold'}`,
        },
    } as const;

    const colorMap = {
        primary: 'text-brand',
        muted: 'text-foreground-muted',
        foreground: 'text-foreground',
        subtle: 'text-foreground-subtle',
        error: 'text-error',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
    }

    const { element, className: sizeClasses } = sizeMap[size];

    return React.createElement(
        element as string,
        {
            className: `${base} ${sizeClasses} ${className} ${colorMap[color]} ${textTransform ? textTransform : ''} `.trim(),
            ...props,
        },
        children
    );
};

export default Typography;