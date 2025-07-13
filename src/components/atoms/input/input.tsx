import { FC, InputHTMLAttributes } from "react";
import "../../../output.css";
import { clsx } from "clsx";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary" | "error";
  inputSize?: "small" | "medium" | "large";
  className?: string;
}

const variantStyles = {
  filled:
    "bg-gray-100 text-white dark:bg-gray-800 border border-transparent focus:ring-2 focus:ring-offset-1",
  outlined:
    "bg-transparent text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-offset-1",
};

const colorStyles = {
  primary: {
    filled: "focus:ring-blue-500 text-black",
    outlined: "border-blue-500 focus:ring-blue-500",
  },
  secondary: {
    filled: "focus:ring-gray-500",
    outlined: "border-gray-500 focus:ring-gray-500",
  },
  error: {
    // filled: 'border-red-500 focus:ring-red-500',
    filled:
      "border-red-500 bg-red-50 text-red-700 placeholder:text-red-400 ring-red-500",
    outlined:
      "border-red-500 text-red-700 placeholder:text-red-400 ring-red-500",
  },
};

const sizeStyles = {
  small: "text-sm px-3 py-1.5 rounded-md",
  medium: "text-base px-4 py-2 rounded-lg",
  large: "text-lg px-5 py-3 rounded-xl",
};

const Input: FC<InputProps> = ({
  variant = "filled",
  color = "primary",
  inputSize = "medium",
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className={clsx(
        "transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500",
        variantStyles[variant],
        colorStyles[color][variant],
        sizeStyles[inputSize],
        className
      )}
      {...props}
    />
  );
};

export default Input;
