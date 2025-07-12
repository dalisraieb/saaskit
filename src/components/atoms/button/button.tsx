import { clsx } from 'clsx';
import "../../../output.css";
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'ghost' | 'link';
  color?: 'primary' | "secondary" | "error" | 'success' | 'warning' | 'info';
  gradient?: boolean;
  size?: 'xs' | 'small' | 'medium' | 'large';
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  iconOnly?: boolean;
}


export const Button = ({
  variant = 'fill',
  color = 'primary',
  size = 'medium',
  gradient = false,
  className,
  children,
  fullWidth = false,
  iconOnly,
  ...props
}: ButtonProps) => {
  const base =
    'rounded-button cursor-pointer transition-all duration-200 active:scale-95 backdrop-blur-md flex items-center justify-center capitalize font-medium disabled:opacity-50 disabled:pointer-events-none';

  const sizeMap = {
    xs: !iconOnly ? 'text-xs h-7 px-space-md xs:px-space-lg [&>svg]:size-3.5 gap-2' : 'size-7 [&>svg]:size-3.5',
    small: !iconOnly ? 'text-xs h-8 px-space-md xs:px-space-xl [&>svg]:size-4 gap-2' : 'size-8 [&>svg]:size-4',
    medium: !iconOnly ? 'text-sm h-9 px-space-md xs:px-space-2xl [&>svg]:size-4.5 gap-2' : 'size-9 [&>svg]:size-4.5',
    large: !iconOnly ? 'text-base h-10 px-space-md xs:px-space-3xl [&>svg]:size-5 gap-2' : 'size-10 [&>svg]:size-5',
  };

  const variantMap: Record<string, string> = {
    /* Fill - Primary */
    "fill-primary": "bg-brand text-brand-foreground hover:bg-brand-hover shadow-md hover:shadow-lg active:bg-brand  ",
    /* Fill - secondary */
    "fill-secondary": "bg-background-subtle dark:bg-background-subtle/60 text-foreground hover:bg-background-subtle/80 dark:hover:bg-background-subtle/50",
    /* Fill - info */
    "fill-info": "bg-info text-brand-foreground hover:bg-info/90 shadow-md hover:shadow-lg",
    /* Fill - success */
    "fill-success": "bg-success text-brand-foreground hover:bg-success/90 shadow-md hover:shadow-lg",
    /* Fill - warning */
    "fill-warning": "bg-warning text-brand-foreground hover:bg-warning/90 shadow-md hover:shadow-lg",
    /* Fill - error */
    "fill-error": "bg-error text-brand-foreground hover:bg-error/90 shadow-md hover:shadow-lg",
    /* Outline - primary  */
    "outline-primary": "border border-brand/30 bg-brand/10 dark:bg-brand/30 text-brand shadow-sm hover:bg-brand/30 dark:hover:bg-brand/20",
    /* Outline - secondary  */
    "outline-secondary": "border border-border bg-background-subtle/40 text-foreground shadow-sm hover:bg-background-subtle dark:hover:bg-background-subtle/50",
    /* Outline - Error  */
    "outline-error": "border border-error/30 bg-error/10 dark:bg-error/30 text-error shadow-sm hover:bg-error/30 dark:hover:bg-error/20",
    /* Outline - success  */
    "outline-success": "border border-success/30 bg-success/10 dark:bg-success/30 text-success shadow-sm hover:bg-success/30 dark:hover:bg-success/20",
    /* Outline - warning  */
    "outline-warning": "border border-warning/30 bg-warning/10 dark:bg-warning/30 text-warning shadow-sm hover:bg-warning/30 dark:hover:bg-warning/20",
    /* Outline - info  */
    "outline-info": "border border-info/30 bg-info/10 dark:bg-info/30 text-info shadow-sm hover:bg-info/30 dark:hover:bg-info/20",
    /* ghost primary  */
    "ghost-primary": "text-brand hover:bg-brand hover:text-brand-foreground",
    /* ghost secondary  */
    "ghost-secondary": "text-foreground hover:bg-background-subtle dark:hover:bg-background-subtle/50",
    /* ghost error  */
    "ghost-error": "text-error hover:bg-error hover:text-brand-foreground",
    /* ghost success  */
    "ghost-success": "text-success hover:bg-success hover:text-brand-foreground",
    /* ghost warning  */
    "ghost-warning": "text-warning hover:bg-warning hover:text-brand-foreground",
    /* ghost info  */
    "ghost-info": "text-info hover:bg-info hover:text-brand-foreground",
    /* link primary  */
    "link-primary": "text-brand hover:underline",
    /* link secondary  */
    "link-secondary": "text-foreground hover:underline",
    /* link error  */
    "link-error": "text-error hover:underline",
    /* link success  */
    "link-success": "text-success hover:underline",
    /* link warning  */
    "link-warning": "text-warning hover:underline",
    /* link info  */
    "link-info": "text-info hover:underline",
  }

  const variantKey = `${variant}-${color}`;

  return (
    <button
      {...props}
      className={clsx(
        base,
        sizeMap[size],
        className,
        variantMap[variantKey],
        fullWidth && 'w-full',
      )}
    >
      {children}
    </button>
  );
};
